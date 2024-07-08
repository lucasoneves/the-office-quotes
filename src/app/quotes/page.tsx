'use client';

import Button from "@/components/Button";
import Link from "next/link";

import styles from './quotes.module.scss';

export default function QuotePage() {
  return <section>
    <Link href={'/'}>
      <Button title="Voltar" styleClass={styles['button']}></Button>
    </Link>
    <h1 className={styles['title']}>Quotes</h1>
  </section>
}