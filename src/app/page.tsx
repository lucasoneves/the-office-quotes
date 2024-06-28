import Image from "next/image";
import styles from "./page.module.scss";
import Quote from "@/components/quote/page";
import cmsService from "../infra/cms/cmsService";
import { ReactNode } from "react";

type QuoteTypes = {
  content: ReactNode;
  author: {
    avatar: {
      url: string
    };
    title: string
  };
  id: string;
};
export default async function Home() {
  const contentQuery = `{
    allQuotes {
    id
    content
    author {
      id
      title
      avatar {
        url
      }
    }
    _status
  }
}`;

  const { data } = await cmsService({
    query: contentQuery,
  });

  console.log("Data => ", data.pageContent.data.allQuotes);

  return (
    <main className={styles.main}>
      {data.pageContent.data.allQuotes.map((quote: QuoteTypes) => (
        <Quote
          authorAvatar={quote.author.avatar.url}
          authorName={quote.author.title}
          content={quote.content}
          key={quote.id}
        />
      ))}
    </main>
  );
}
