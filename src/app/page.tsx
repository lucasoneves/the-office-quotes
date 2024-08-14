import Quote from "@/components/quote/page";
import { ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.scss";

import getRandomQuote from "@/components/ServerLoadMore";
import NavActions from "@/components/NavActions";

export default async function Home() {

  async function refresh() {
    "use server";
    const { quote } = await getRandomQuote();

    return quote;
  }

  let quote = await getRandomQuote();

  return (
    <main className={styles.main}>
      <NavActions action={refresh} />
      <Quote
        authorAvatar={quote.author.avatar.url}
        authorName={quote.author.title}
        content={quote.content}
        key={quote.id}
      />
    </main>
  );
}
