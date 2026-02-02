"use client";

import Image, { ImageProps } from "next/image";

type FallbackImageProps = ImageProps;

export function FallbackImage(props: FallbackImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        e.currentTarget.style.visibility = "hidden";
      }}
    />
  );
}
