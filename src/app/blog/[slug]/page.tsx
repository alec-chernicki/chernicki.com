import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { DateTime } from "@/components/date-time";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => `/blog/${params.slug}` === post.slug);

  if (!post) {
    return;
  }

  const {
    title,
    image,
    publishedAt: publishedTime,
    summary: description,
    slug,
  } = post;
  const ogImage = image
    ? `https://chernicki.com${image}`
    : `https://chernicki.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://chernicki.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="grid space-y-4 pb-16">
      <h1 className="font-bold font-serif text-4xl">{post.title}</h1>
      <DateTime dateTime={post.publishedAt} />
      <Image
        src={post.image}
        alt={post.imageAlt}
        width={1200}
        height={630}
        className="rounded-lg"
      />
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostPage;
