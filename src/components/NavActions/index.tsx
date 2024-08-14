"use client";
import Link from "next/link";
import Button from "../Button";
import styles from "@/app/page.module.scss";

export default function NavActions({...props}) {
  return (
    <nav className={styles["nav-actions"]}>
      <Link href={"/quotes"} className={styles["link"]}>
        <Button className={styles["btn-cta"]}>See all</Button>
      </Link>
      <form {...props}>
        <Button className={styles["btn-cta"]}>Load another quote</Button>
      </form>
    </nav>
  );
}
