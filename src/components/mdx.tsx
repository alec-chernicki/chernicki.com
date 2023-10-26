import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import clsx from "clsx";

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
  return (
    <>
      <Image
        {...props}
        className={clsx("rounded-lg w-full h-auto", { "mb-4": !!alt })}
        alt={alt}
      />
      {alt ? <p className="text-xs text-center mt-0">{alt}</p> : undefined}
    </>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert overflow-hidden">
      <Component components={components} />
    </article>
  );
}
