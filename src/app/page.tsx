
import Image from "next/image";
import styles from "./page.module.scss";
import Quote from "@/components/quote/page";
import cmsService from "../infra/cms/cmsService";
import { ReactNode } from "react";
import {redirect} from 'next/navigation';
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

async function refresh() {
  'use server'
  redirect('/')
}

  const { data } = await cmsService({
    query: contentQuery,
  });

  const randomQuoteIndex = Math.floor(Math.random() * data.pageContent.data.allQuotes.length);
  const quote = data.pageContent.data.allQuotes[randomQuoteIndex];

  return (
    <main className={styles.main}>
      <Link href={'/quotes'} className={styles['link']}>
        <Button styleClass={styles['btn-cta']} title="See all" />
      </Link>
      <Quote
        authorAvatar={quote.author.avatar.url}
        authorName={quote.author.title}
        content={quote.content}
        key={quote.id}
      />
      <form action={refresh}>
        <button className={styles['btn-cta']}>Load another</button>
      </form>
    </main>
  );
}
