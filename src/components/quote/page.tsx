import Image from "next/image";
import { ReactNode } from "react";
import { StructuredText } from "react-datocms";

import styles from './quote.module.scss';
//
type QuoteTypes = {
  content: ReactNode;
  authorName: string;
  authorAvatar: string;
}

export default function Quote({content, authorName, authorAvatar}: QuoteTypes) {
  return (
    <article className={styles['quote']}>
      <header>
      <blockquote>{content}</blockquote>
      <span>{authorName}</span>
      </header>
      <Image
        src={authorAvatar}
        alt={authorName}
        width={256}
        height={256}
      />
    </article>
  );
}
