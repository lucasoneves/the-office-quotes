"use client";

import Button from "@/components/Button";
import Link from "next/link";

import styles from "./quotes.module.scss";

import buttonStyles from "@/components/Button/button.module.scss";

export default function QuotePage() {
  return (
    <section>
      <Link href={"/"}>
        <Button title="Voltar" styleClass={`${buttonStyles['button']}`}></Button>
      </Link>
      <h1 className={styles["title"]}>Quotes</h1>
    </section>
  );
}
