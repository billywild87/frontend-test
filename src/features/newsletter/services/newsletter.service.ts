import { isMockEnabled, MOCK } from "@/shared/config";
import { sleep } from "@/shared/utils";
import {
  NEWSLETTER_SCENARIO,
  NEWSLETTER_SCENARIOS,
  NewsletterScenario,
} from "../fixtures";
import { Newsletter } from "../types";

export const newsletterService = {
  async list(
    scenario: NewsletterScenario = NEWSLETTER_SCENARIO.ALL
  ): Promise<Newsletter[]> {
    if (isMockEnabled(MOCK.NEWSLETTER)) {
      await sleep(300);

      if (scenario === NEWSLETTER_SCENARIO.ERROR) {
        throw new Error("Failed to fetch newsletters");
      }

      return NEWSLETTER_SCENARIOS[scenario];
    }

    throw new Error("API not implemented");
  },
};
