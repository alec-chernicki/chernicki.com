import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import clsx from "clsx";
import { File } from "lucide-react";

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

function Filename({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-nowrap items-center gap-1 dark:text-white text-neutral-800">
      <File className="h-4 w-4" />
      <p className="font-mono font-semibold my-0 text-xs">{children}</p>
    </div>
  );
}

function Callout(props: React.ComponentProps<"aside">) {
  return (
    <aside
      {...props}
      className="border-l-2 dark:border-neutral-700 border-neutral-300 pl-6"
    />
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Filename,
  Callout,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert overflow-hidden max-w-full">
      <Component components={components} />
    </article>
  );
}
