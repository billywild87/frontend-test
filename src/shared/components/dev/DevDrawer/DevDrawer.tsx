"use client";

import { useState, ReactNode } from "react";
import { fr } from "@/shared/i18n";
import {
  drawer,
  header,
  headerTitle,
  headerToggle,
  content,
} from "./devDrawer.styles";

type DevDrawerProps = {
  children: ReactNode;
};

export function DevDrawer({ children }: DevDrawerProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Ne pas afficher en production
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className={drawer}>
      <div className={header} onClick={() => setIsOpen(!isOpen)}>
        <span className={headerTitle}>
          <span>🛠️</span>
          <span>{fr.dev.drawer.title}</span>
        </span>
        <span
          className={headerToggle}
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          ▼
        </span>
      </div>
      {isOpen && <div className={content}>{children}</div>}
    </div>
  );
}
