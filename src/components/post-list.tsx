import Link from "next/link";
import React from "react";
import { Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { DateTime } from "./date-time";
import Image from "next/image";

function PostCard(post: Post) {
  return (
    <Link
      href={post.slug}
      className="flex flex-col md:flex-row md:items-center rounded-md group border dark:hover:bg-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 transition-colors"
    >
      <div className="shrink basis-1/3">
        <Image
          className="w-full h-auto rounded-md"
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={630}
        />
      </div>
      <div className="grow basis-2/3 py-6 pl-6 md:pl-11 pr-6">
        <h3 className="mb-2 text-base text-neutral-700 dark:text-white transition-colors">
          {post.title}
        </h3>
        <DateTime dateTime={post.publishedAt} />
      </div>
    </Link>
  );
}
function PostList({ posts }: { posts: Post[] }) {
  const sortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <div className="rounded-md">
      {sortedPosts.length ? (
        sortedPosts.map((post, idx) => <PostCard key={idx} {...post} />)
      ) : (
        <p className="text-neutral-400 dark:text-neutral-600">
          No posts yet...
        </p>
      )}
    </div>
  );
}

export default PostList;
