import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { getFeaturedPosts } from "@/lib/blog-data";

export default function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts();

  return (
    <Container className="pb-12 md:pb-16">
      <h2 className="text-xl font-semibold text-neutral-black mb-6 m-auto justify-center text-center">
        Featured Posts
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="relative h-80 md:h-[380px] rounded-2xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* <span className="inline-block bg-chanor-orange text-white text-xs font-medium px-3 py-1 rounded mb-3">
                  {post.category}
                </span> */}
                <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span className="text-white text-sm">
                      {post.author.name}
                    </span>
                    <div className="flex items-center">
                      <span className="text-white ">.</span>

                      <span className="text-white text-sm ">{post.date}</span>
                    </div>
                  </div>
                  <button className="bg-white text-chanor-orange px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-chanor-orange hover:text-white">
                    Product Update
                  </button>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Container>
  );
}
