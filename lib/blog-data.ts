export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: Author;
  date: string;
  featured?: boolean;
}

export const CATEGORIES = [
  "All",
  "Announcements",
  "Fintech",
  "Security",
  "Guides",
  "Business Growth",
  "Product Update",
  "Tutorial",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "how-voice-banking-is-changing-financial-access",
    title: "5 ways chanor improves your payment processing",
    excerpt:
      "Find out how Chanor helps you process payments more efficiently while improving customer experience.",
    category: "Fintech",
    coverImage: "/blog/blog1.svg",
    author: {
      name: "Nkechi Blessing",
      avatar: "/blog/featuredProfile.svg",
    },
    date: "Dec 15, 2024",
    featured: true,
  },
  {
    id: "2",
    slug: "chanor-launches-new-agent-network",
    title: "5 ways chanor improves your payment processing",
    excerpt:
      "Find out how Chanor helps you process payments more efficiently while improving customer experience.",
    category: "Announcements",
    coverImage: "/blog/blog1.svg",
    author: {
      name: "Nkechi Blessing",
      avatar: "/blog/featuredProfile.svg",
    },
    date: "Dec 10, 2024",
    featured: true,
  },
  {
    id: "3",
    slug: "protect-yourself-from-financial-fraud",
    title: "5 Ways to Protect Yourself from Financial Fraud",
    excerpt:
      "Learn essential tips to keep your money safe and secure in the digital age.",
    category: "Product Update",
    coverImage: "/blog/groupImage.svg",
    author: {
      name: "Fatima Ibrahim",
      avatar: "/blog/blogProfile1.svg",
    },
    date: "Dec 8, 2024",
  },
  {
    id: "4",
    slug: "guide-to-sending-money-with-voice",
    title: "Complete Guide to Sending Money with Your Voice",
    excerpt:
      "Step-by-step instructions on how to use Chanor's voice banking feature in your local language.",
    category: "Security",
    coverImage: "/blog/newIdea.svg",
    author: {
      name: "Chidi Okoro",
      avatar: "/blog/blogProfile3.svg",
    },
    date: "Dec 5, 2024",
  },
  {
    id: "5",
    slug: "growing-your-business-with-chanor-pos",
    title: "Growing Your Business with Chanor POS Solutions",
    excerpt:
      "How small business owners are increasing revenue with our easy-to-use POS system.",
    category: "Announcements",
    coverImage: "/blog/blog2.svg",
    author: {
      name: "Ngozi Eze",
      avatar: "/blog/blogProfile2.svg",
    },
    date: "Dec 1, 2024",
  },
  {
    id: "6",
    slug: "fintech-trends-2025",
    title: "Top Fintech Trends to Watch in 2025",
    excerpt:
      "From AI-powered banking to blockchain integration, here's what's shaping the future of finance.",
    category: "Fintech",
    coverImage: "/blog/groupImage.svg",
    author: {
      name: "Yusuf Bello",
      avatar: "/blog/blogProfile1.svg",
    },
    date: "Nov 28, 2024",
  },
  {
    id: "7",
    slug: "fintech-trends-2025",
    title: "Top Fintech Trends to Watch in 2025",
    excerpt:
      "From AI-powered banking to blockchain integration, here's what's shaping the future of finance.",
    category: "Tutorial",
    coverImage: "/blog/newIdea.svg",
    author: {
      name: "Yusuf Bello",
      avatar: "/blog/blogProfile3.svg",
    },
    date: "Nov 28, 2024",
  },
  {
    id: "8",
    slug: "fintech-trends-2025",
    title: "Top Fintech Trends to Watch in 2025",
    excerpt:
      "From AI-powered banking to blockchain integration, here's what's shaping the future of finance.",
    category: "Business Growth",
    coverImage: "/blog/blog2.svg",
    author: {
      name: "Yusuf Bello",
      avatar: "/blog/blogProfile2.svg",
    },
    date: "Nov 28, 2024",
  },
];

export const getFeaturedPosts = () =>
  BLOG_POSTS.filter((post) => post.featured);

export const getRegularPosts = () =>
  BLOG_POSTS.filter((post) => !post.featured);

export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const getPostsByCategory = (category: string) => {
  if (category === "All") {
    return BLOG_POSTS;
  }
  return BLOG_POSTS.filter((post) => post.category === category);
};

export const getFeaturedPostsByCategory = (category: string) => {
  if (category === "All") {
    return getFeaturedPosts();
  }
  return BLOG_POSTS.filter((post) => post.featured && post.category === category);
};

export const getRegularPostsByCategory = (category: string) => {
  if (category === "All") {
    return getRegularPosts();
  }
  return BLOG_POSTS.filter((post) => !post.featured && post.category === category);
};
