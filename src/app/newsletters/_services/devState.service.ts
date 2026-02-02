import { cookies } from "next/headers";
import {
  UserScenario,
  USER_SCENARIO,
  isValidUserScenario,
} from "@/features/user";
import {
  NewsletterScenario,
  NEWSLETTER_SCENARIO,
  isValidNewsletterScenario,
} from "@/features/newsletter";

export const DEV_COOKIE_KEY = {
  USER_SCENARIO: "dev_user_scenario",
  NEWSLETTER_SCENARIO: "dev_newsletter_scenario",
} as const;

export type DevState = {
  userScenario: UserScenario;
  newsletterScenario: NewsletterScenario;
};

export const devStateService = {
  async getState(): Promise<DevState> {
    if (process.env.NODE_ENV === "production") {
      return {
        userScenario: USER_SCENARIO.NONE,
        newsletterScenario: NEWSLETTER_SCENARIO.ALL,
      };
    }

    const cookieStore = await cookies();
    const userScenarioParam = cookieStore.get(DEV_COOKIE_KEY.USER_SCENARIO)?.value;
    const newsletterScenarioParam = cookieStore.get(DEV_COOKIE_KEY.NEWSLETTER_SCENARIO)?.value;

    return {
      userScenario: isValidUserScenario(userScenarioParam)
        ? userScenarioParam
        : USER_SCENARIO.NONE,
      newsletterScenario: isValidNewsletterScenario(newsletterScenarioParam)
        ? newsletterScenarioParam
        : NEWSLETTER_SCENARIO.ALL,
    };
  },
};
