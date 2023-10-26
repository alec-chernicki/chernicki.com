import { format, parseISO } from "date-fns";
import React from "react";

export function DateTime({ dateTime }: { dateTime: string }) {
  return (
    <time
      dateTime={dateTime}
      className="block text-xs font-mono text-neutral-500"
    >
      {format(parseISO(dateTime), "LLLL d, yyyy")}
    </time>
  );
}
