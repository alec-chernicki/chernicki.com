import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import profileImage from "./profile.jpg";
import PostList from "@/components/post-list";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-6 mb-10">
        <div className="prose prose-neutral dark:prose-invert grow">
          <h1 className="font-semibold font-serif text-4xl mb-6">
            {`Hey there, I'm Alec 👋`}
          </h1>
          <p>
            I build tools that scale large JavaScript projects. I&apos;ve worked
            on web platform teams for the last decade and currently support the
            teams that build Disney+ and Hulu as an architect.
          </p>
          <p>
            {`I'm passionate about growing empathetic engineering teams and in my
          free time I like to garden, try new coffeeshops, and hang out with my
          corgi, Arthur.`}
          </p>
        </div>
        <div className="h-36 w-36 md:h-auto md:w-full md:max-w-[250px] shrink-0 relative">
          <Image
            priority
            src={profileImage}
            fill
            alt="Picture of Alec Chernicki"
            className="rounded-full md:rounded-md object-cover"
          />
        </div>
      </div>
      <h2 className="mb-2 text-2xl font-semibold font-serif">
        Recent thoughts...
      </h2>
      <PostList posts={allPosts} />
    </>
  );
}
