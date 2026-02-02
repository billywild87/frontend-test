import { Site, SubscriptionRight } from "@/shared/types";
import { Newsletter } from "../../types";
import { hasAccessToNewsletter } from "../../services/newsletter.helpers";
import { NewsletterCard } from "../NewsletterCard/NewsletterCard";
import {
  section,
  header,
  title,
  count,
  grid,
} from "./newsletterSection.styles";

interface Props {
  site: Site;
  items: Newsletter[];
  userSubscriptions: SubscriptionRight[];
}

export function NewsletterSection({ site, items, userSubscriptions }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={section}>
      <header className={header}>
        <h2 className={title}>{site}</h2>
        <span className={count}>{items.length}</span>
      </header>

      <div className={grid}>
        {items.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            newsletter={newsletter}
            hasAccess={hasAccessToNewsletter(
              newsletter.subscriptions,
              userSubscriptions
            )}
          />
        ))}
      </div>
    </section>
  );
}
