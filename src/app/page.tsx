"use server";
import Image from "next/image";
import styles from "./page.module.scss";
import Quote from "@/components/quote/page";
import cmsService from "../infra/cms/cmsService";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

type QuoteTypes = {
  content: ReactNode;
  author: {
    avatar: {
      url: string;
    };
    title: string;
  };
  id: string;
};
export default async function Home() {
  const QUOTE_INDEX = Math.floor(Math.random() * 100);
  const contentQuery = `{
allQuotes(first: 100) {
  content
  author {
    title
    avatar {
      url
    }
  }
}
}`;

  async function refresh() {
    "use server";
    redirect("/");
  }

  const { data } = await cmsService({
    query: contentQuery,
  });
  console.log(QUOTE_INDEX);
  const quote = data.pageContent.data.allQuotes[QUOTE_INDEX];

  return (
    <main className={styles.main}>
      <nav className={styles["nav-actions"]}>
        <Link href={"/quotes"} className={styles["link"]}>
          <Button styleClass={styles["btn-cta"]} title="See all" />
        </Link>
        <form action={refresh}>
          <Button
            styleClass={styles["btn-cta"]}
            title="Load another"
          />
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
