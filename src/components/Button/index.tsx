"use client";

import { useFormStatus } from "react-dom";
import ButtonLoader from "../ButtonLoader";
import styles from "./button.module.scss";

type ButtonTypes = {
  styleClass: string;
  title: string;
  actionType?: "submit" | "reset" | "button" | undefined
  children?: React.ReactNode;
};

export default function Button({ styleClass, title, children, actionType }: ButtonTypes) {
  const { pending } = useFormStatus();
  return (
    <button type={actionType} disabled={pending} className={`${styles["button"]} ${styleClass} `}>
      {pending && <ButtonLoader />}
      {children}
      {title}
    </button>
  );
}
