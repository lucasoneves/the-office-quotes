import Quote from "@/components/quote/page";
import { ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.scss";

import getRandomQuote from "@/components/ServerLoadMore";

export default async function Home() {

  async function refresh() {
    "use server";
    const { quote } = await getRandomQuote();

    return quote;
  }

  let quote = await getRandomQuote();

  return (
    <main className={styles.main}>
      <nav className={styles["nav-actions"]}>
        <Link href={"/quotes"} className={styles["link"]}>
          <Button className={styles["btn-cta"]}>See all</Button>
        </Link>
        <form action={refresh}>
          <Button className="">Load another one</Button>
        </form>
      </nav>
      <Quote
        authorAvatar={quote.author.avatar.url}
        authorName={quote.author.title}
        content={quote.content}
        key={quote.id}
      />
    </main>
  );
}
