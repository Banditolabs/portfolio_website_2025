import { Asset } from "expo-asset";

export const loadMarkdownFile = async (markdownPath: string): Promise<string | null> => {
try {
  const file = Asset.fromModule(markdownPath);
  await file.downloadAsync();
  const response = await fetch(file.uri);
  return await response.text();
} catch (error) {
  console.error('Error loading markdown file:', error);
  return null;
  }
};
