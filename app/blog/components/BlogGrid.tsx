"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { CATEGORIES, getRegularPostsByCategory } from "@/lib/blog-data";

const POSTS_PER_PAGE = 3;

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  
  const allPosts = getRegularPostsByCategory(activeCategory);
  const visiblePosts = allPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < allPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(POSTS_PER_PAGE); // Reset visible count when category changes
  };

  return (
    <Container className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-black mb-6 m-auto justify-center text-center">
        Blog
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 m-auto justify-center">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === category
                ? "bg-chanor-orange text-white"
                : "bg-white text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {visiblePosts.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-6 py-3 bg-chanor-orange text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                Load More
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 py-12">
          No posts found in this category.
        </p>
      )}
    </Container>
  );
}
