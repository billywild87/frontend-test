import { Newsletter } from "../types";
import { NEWSLETTER_COLLECTION } from "./newsletter.fixtures";

export const NEWSLETTER_SCENARIO = {
  ALL: "all",
  EMPTY: "empty",
  ERROR: "error",
} as const;

export type NewsletterScenario =
  (typeof NEWSLETTER_SCENARIO)[keyof typeof NEWSLETTER_SCENARIO];

export const NEWSLETTER_SCENARIOS: Record<
  Exclude<NewsletterScenario, "error">,
  Newsletter[]
> = {
  [NEWSLETTER_SCENARIO.ALL]: NEWSLETTER_COLLECTION,
  [NEWSLETTER_SCENARIO.EMPTY]: [],
};
