import { BlogPost } from "@/src/types/blog";


export const blogPosts: BlogPost[] = [
  {
    id: '2',
    title: 'Developing For My Community',
    date: '2025.03.10',
    description: 'Giving a great group an online presence',
    slug: 'developing-for-my-community',
    tags: ['techical'],
    image: require('../../assets/images/blog/emsc-logo.png'),
    contentPath: require('../../assets/markdown/2025-01-02-developing-for-my-community.md'),
  },
  {
    id: '1',
    title: 'Zero Index',
    date: '2025.01.04',
    description: 'My firtst blog post on this site.',
    slug: 'zero-index',
    tags: ['personal'],
    image: require('../../assets/images/blog/zero_index_image.png'),
    contentPath: require('../../assets/markdown/2025-01-04-zero-index.md'),
  },
]
