import Image from "next/image";
import { ReactNode } from "react";
import { StructuredText } from "react-datocms";
//
type QuoteTypes = {
  content: ReactNode;
  authorName: string;
  authorAvatar: string;
}

export default function Quote({content, authorName, authorAvatar}: QuoteTypes) {
  return (
    <article>
      <Image
        src={authorAvatar}
        alt={authorName}
        width={256}
        height={256}
      />
      <div>
      {content}
      </div>
      <span>{authorName}</span>
    </article>
  );
}
