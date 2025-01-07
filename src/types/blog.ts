export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
  contentPath: string;
}

export interface LoadedBlogPost extends Omit<BlogPost, 'contentPath'> {
  content: string;
}