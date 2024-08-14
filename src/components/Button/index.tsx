"use client";

import { useFormStatus } from "react-dom";
import ButtonLoader from "../ButtonLoader";
import styles from "./button.module.scss";
import { SyntheticEvent } from "react";

type ButtonTypes = {
  className?: string;
  actionType?: "submit" | "reset" | "button" | undefined;
  children?: React.ReactNode;
  loading?: boolean;
  handleSubmit?: React.EventHandler<SyntheticEvent>;
};

export default function Button({
  className,
  children,
  actionType,
  loading
}: ButtonTypes) {
  const { pending } = useFormStatus();
  return (
    <button
      type={actionType}
      disabled={pending}
      className={`${styles['button']} ${className}`}
    >
      {loading || pending && <ButtonLoader />}
      {children}
    </button>
  );
}
