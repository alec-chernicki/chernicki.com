import React from "react";
import { allPosts } from "contentlayer/generated";
import PostList from "@/components/post-list";

function BlogPage() {
  return (
    <>
      <h1 className="font-semibold font-serif text-4xl mb-6">
        All my thoughts...
      </h1>
      <PostList posts={allPosts} />
    </>
  );
}

export default BlogPage;
