import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex flex-col gap-4">
        {/* Image */}
        <div className="relative h-[200px] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-chanor-orange/10 text-chanor-orange text-xs font-medium px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">{post.date}</span>
          </div>

          <h3 className="text-neutral-black font-semibold text-base mb-3 line-clamp-2 group-hover:text-chanor-orange transition-colors">
            {post.title}
          </h3>

          {/* Author */}
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span className="text-gray-600 text-sm">{post.author.name}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
