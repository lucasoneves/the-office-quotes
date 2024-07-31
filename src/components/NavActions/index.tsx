"use client";
import Link from "next/link";
import Button from "../Button";
import styles from '@/app/page.module.scss';

type ActionTypes = {
  handleSubmit: string | ((formData: FormData) => void) | undefined
}

export default function NavActions({handleSubmit}: ActionTypes) {
  return (
    <nav className={styles["nav-actions"]}>
      <Link href={"/quotes"} className={styles["link"]}>
        <Button isCta styleClass={styles["btn-cta"]} title="See all" />
      </Link>
      <form action={handleSubmit}>
        <Button isCta styleClass={styles["btn-cta"]} title="Load another" />
      </form>
    </nav>
  );
}
