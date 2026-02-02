import { fr } from "@/shared/i18n";
import { container, title, description } from "./newsletterPageHeader.styles";

export function NewsletterPageHeader() {
  return (
    <header className={container}>
      <h1 className={title}>{fr.newsletter.page.title}</h1>
      <p className={description}>{fr.newsletter.page.description}</p>
    </header>
  );
}
