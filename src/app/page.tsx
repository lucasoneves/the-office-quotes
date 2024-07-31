"use client"; // Permite o uso de hooks do React

import { useState, useEffect } from "react";
import Quote from "@/components/quote/page";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.scss";

import getRandomQuote from "@/components/ServerLoadMore";

type QuoteTypes = {
  content: React.ReactNode;
  author: {
    avatar: {
      url: string;
    };
    title: string;
  };
  id: string;
};

export default function Home() {
  // Estado para armazenar a citação atual
  const [quote, setQuote] = useState<QuoteTypes | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  // Busca uma citação aleatória ao carregar a página
  useEffect(() => {
    async function fetchInitialQuote() {
      const initialQuote = await getRandomQuote();
      setQuote(initialQuote);
    }

    fetchInitialQuote();
  }, []);

  // Função para lidar com a submissão do formulário e atualizar a citação
  const handleSubmit = async (event: any) => {
    try {
      setPending(true);
      event.preventDefault();

      // Chama a Server Action para obter uma nova citação
      const newQuote = await getRandomQuote();

      // Atualiza o estado da citação
      if (newQuote) {
        setQuote(newQuote);
      }
    } catch (error) {
      console.error("Error on trying to fetch quote", error);
    } finally {
      setPending(false);
    }
  };

  // Validação de segurança
  if (!quote) {
    return (
      <main className={styles.main}>
        <p>Error: No quote available. Please try again.</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <nav className={styles["nav-actions"]}>
        <Link href={"/quotes"} className={styles["link"]}>
          <Button isCta styleClass={styles["btn-cta"]} title="See all" />
        </Link>
        <form onSubmit={handleSubmit}>
          <Button isCta styleClass={styles["btn-cta"]} pending={pending} title="Load another" />
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
