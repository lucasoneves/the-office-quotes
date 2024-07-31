"use client";

import { useFormStatus } from "react-dom";
import ButtonLoader from "../ButtonLoader";
import styles from "./button.module.scss";
import { SyntheticEvent } from "react";

type ButtonTypes = {
  styleClass: string;
  title: string;
  actionType?: "submit" | "reset" | "button" | undefined
  children?: React.ReactNode;
  isCta?: boolean;
  pending?: boolean;
  handleSubmit?: React.EventHandler<SyntheticEvent>;
};

export default function Button({ styleClass, title, children, actionType, isCta, pending, handleSubmit }: ButtonTypes) {
  return (
    <button onSubmit={handleSubmit} type={actionType} disabled={pending} className={`${styles["button"]} ${isCta && styles['button__cta']} `}>
      {pending && <ButtonLoader />}
      {children}
      {title}
    </button>
  );
}
