"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui";
import { fr } from "@/shared/i18n";
import { container, errorCode, title, description } from "./not-found.styles";

export default function NotFound() {
  return (
    <div className={container}>
      <span className={errorCode}>404</span>
      <h2 className={title}>{fr.common.notFound.title}</h2>
      <p className={description}>{fr.common.notFound.description}</p>
      <Link href="/">
        <Button variant="primary" size="md">
          {fr.common.notFound.backHome}
        </Button>
      </Link>
    </div>
  );
}
