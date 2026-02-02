import { ReactNode } from "react";
import { section, sectionTitle } from "./devDrawer.styles";

type DevSectionProps = {
  title: string;
  children: ReactNode;
};

export function DevSection({ title, children }: DevSectionProps) {
  return (
    <div className={section}>
      <span className={sectionTitle}>{title}</span>
      {children}
    </div>
  );
}
