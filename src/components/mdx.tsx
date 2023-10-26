import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props: React.ComponentPropsWithoutRef<"a">) => {
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return <Image {...props} className="rounded-lg" alt={alt} />;
}

function CustomCode(props: React.ComponentProps<"code">) {
  return <code {...props} className="font-mono not-prose" />;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  code: CustomCode,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={components} />
    </article>
  );
}
