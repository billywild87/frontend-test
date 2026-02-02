import {
  groupNewslettersBySite,
  NewsletterScenario,
  NewsletterSection,
  newsletterService,
} from "@/features/newsletter";

import { User } from "@/features/user";
import { EmptyState } from "@/shared/components/ui";
import { fr } from "@/shared/i18n";
import { Site } from "@/shared/types";

type Props = {
  user: User;
  newsletterScenario: NewsletterScenario;
};

export async function NewsletterContent({ user, newsletterScenario }: Props) {
  const newsletters = await newsletterService.list(newsletterScenario);

  if (newsletters.length === 0) {
    return (
      <EmptyState
        title={fr.newsletter.empty.title}
        description={fr.newsletter.empty.description}
      />
    );
  }

  const grouped = groupNewslettersBySite(newsletters);

  return (
    <>
      {Object.entries(grouped).map(([site, items]) => (
        <NewsletterSection
          key={site}
          site={site as Site}
          items={items}
          userSubscriptions={user.subscriptions}
        />
      ))}
    </>
  );
}
