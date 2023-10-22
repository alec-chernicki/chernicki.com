"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { clsx } from "clsx";

function NavigationLink({
  isActive,
  ...props
}: ComponentProps<typeof Link> & { isActive: boolean }) {
  return (
    <Link
      {...props}
      className={clsx("font-mono text-sm transition-colors", {
        "underline text-neutral-800 dark:text-white": isActive,
        "text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-white":
          !isActive,
      })}
    ></Link>
  );
}

function Navigation() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex gap-4 items-center">
        <NavigationLink href="/" isActive={!segment}>
          Home
        </NavigationLink>
        <NavigationLink href="/blog" isActive={segment === "blog"}>
          Blog
        </NavigationLink>
      </div>
      <Link
        href="https://twitter.com/alecchernicki"
        rel="noopener noreferrer"
        target="_blank"
        className="flex gap-1 items-center underline text-sm font-mono"
      >
        Twitter
        <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
}

export default Navigation;
