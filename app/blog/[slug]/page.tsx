import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;

}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-chanor-orange hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block bg-raba-orange/30 text-chanor-orange text-xs font-semibold px-3 py-1 rounded-md mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-neutral-black">{post.author.name}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
          {/* Add more content here when you have full blog post content */}
        </article>
      </div>
    </main>
  );
}
