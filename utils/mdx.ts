import matter from "gray-matter";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
  const mdFiles = require.context("@/app/content/blog", false, /\.md$/)
  console.log('Found MDX files:', mdFiles.keys()); // Check if files are found

  const filePaths = mdFiles.keys().map(key => mdFiles(key));
  console.log('File paths:', filePaths); // Check paths


  const assets = await Asset.loadAsync(filePaths);
  console.log('Loaded assets:', assets); // Check assets


  const posts = await Promise.all(
    assets.map(async (asset) => {
      const fileContent = await FileSystem.readAsStringAsync(asset.uri);
      console.log('File content:', fileContent); // Check content

      const { data, content } = matter(fileContent);
      

      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
        content: content,
      };
    })
  );

  return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}