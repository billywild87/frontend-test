import { devStateService } from "@/app/newsletters/_services/devState.service";
import { NewsletterContent } from "@/app/newsletters/NewsletterContent";
import { NewsletterScenarioSwitcher } from "@/features/newsletter";
import { NewsletterPageHeader } from "@/features/newsletter/components/NewsletterPageHeader";
import { NewsletterSectionSkeleton } from "@/features/newsletter/components/NewsletterSection/NewsletterSectionSkeleton";
import { UserScenarioSwitcher } from "@/features/user/components";
import { userService } from "@/features/user/services";
import { DevDrawer, DevSection } from "@/shared/components";
import { fr } from "@/shared/i18n";
import { Suspense } from "react";
import {
  setNewsletterScenario,
  setUserScenario,
} from "./_services/devState.actions";
export default async function Newsletters() {
  const { userScenario, newsletterScenario } = await devStateService.getState();
  const user = await userService.getCurrent(userScenario);
  return (
    <>
      <NewsletterPageHeader />
      <Suspense
        key={`${userScenario}-${newsletterScenario}`}
        fallback={
          <>
            <NewsletterSectionSkeleton cardCount={4} />
            <NewsletterSectionSkeleton cardCount={3} />
          </>
        }
      >
        <NewsletterContent
          user={user}
          newsletterScenario={newsletterScenario}
        />
      </Suspense>
      <DevDrawer>
        <DevSection title={fr.dev.drawer.section.userScenario}>
          <UserScenarioSwitcher
            current={userScenario}
            onChange={setUserScenario}
          />
        </DevSection>
        <DevSection title={fr.dev.drawer.section.newsletterScenario}>
          <NewsletterScenarioSwitcher
            current={newsletterScenario}
            onChange={setNewsletterScenario}
          />
        </DevSection>
      </DevDrawer>
    </>
  );
}
