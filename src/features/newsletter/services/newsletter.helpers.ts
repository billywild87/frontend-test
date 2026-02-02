import { Site, SubscriptionRight } from "@/shared/types";
import { groupBy } from "@/shared/utils";
import { NEWSLETTER_SCENARIO, NewsletterScenario } from "../fixtures";
import { Newsletter } from "../types";

export function isValidNewsletterScenario(
  value: string | undefined
): value is NewsletterScenario {
  return Object.values(NEWSLETTER_SCENARIO).includes(
    value as NewsletterScenario
  );
}

export function groupNewslettersBySite(
  newsletters: Newsletter[]
): Record<Site, Newsletter[]> {
  return groupBy(newsletters, (n) => n.site);
}

export function hasAccessToNewsletter(
  required: SubscriptionRight[],
  userRights: SubscriptionRight[]
): boolean {
  if (required.length === 0) return true;
  const userSet = new Set(userRights);
  return required.some((r) => userSet.has(r));
}
