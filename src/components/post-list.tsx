import Link from "next/link";
import React from "react";
import { Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="flex justify-between items-center group dark:hover:bg-neutral-900 hover:bg-neutral-50 py-3 border-b last:border-none dark:border-neutral-800 transition-colors"
    >
      <h3 className="text-base font-medium text-neutral-700 dark:text-white transition-colors">
        {post.title}
      </h3>
      <time dateTime={post.date} className="block text-xs font-mono">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </Link>
  );
}
function PostList({ posts }: { posts: Post[] }) {
  const sortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="overflow-hidden rounded-md">
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