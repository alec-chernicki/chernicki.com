import NextImage from "next/image";
import { ComponentProps } from "react";

export const Image = (props: ComponentProps<typeof NextImage>) => {
  return <NextImage {...props} />;
};
