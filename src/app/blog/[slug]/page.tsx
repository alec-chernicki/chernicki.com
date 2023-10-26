import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { DateTime } from "@/components/date-time";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === `/blog/${params.slug}`);

  if (!post) {
    throw new Error("Post not found");
  }

  const { title, summary } = post;

  return {
    title,
    description: summary ?? "Blog post",
  };
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="grid space-y-4 pb-16">
      <h1 className="font-bold font-serif text-4xl">{post.title}</h1>
      <DateTime dateTime={post.publishedAt} />
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
