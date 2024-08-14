import Quote from "@/components/quote/page";
import styles from "./page.module.scss";

import getRandomQuote from "@/components/ServerLoadMore";
import NavActions from "@/components/NavActions";

async function refresh() {
  "use server";
  const revalidate = true;
  const { quote } = await getRandomQuote(revalidate);

  return quote;
}
export default async function Home() {

  const quote = await getRandomQuote();

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
