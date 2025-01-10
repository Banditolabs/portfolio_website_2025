import { BlogPost } from "@/src/types/blog";


export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Zero Index',
    date: '2025.01.04',
    description: 'My firtst blog post on this site.',
    slug: 'zero-index',
    tags: ['zero', 'index'],
    image: require('../../assets/images/blog/zero_index_image.png'),
    contentPath: require('../../assets/markdown/2025-01-04-zero-index.md'),
  },
]
