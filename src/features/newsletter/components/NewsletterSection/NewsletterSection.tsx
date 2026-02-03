import { Site, SubscriptionRight } from "@/shared/types";
import { hasAccessToNewsletter } from "../../services/newsletter.helpers";
import { Newsletter } from "../../types";
import { NewsletterCard } from "../NewsletterCard/NewsletterCard";
import { grid, header, section, title } from "./newsletterSection.styles";

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
