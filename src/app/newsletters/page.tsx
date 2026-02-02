import { devStateService } from "@/app/newsletters/_services/devState.service";
import { NewsletterContent } from "@/app/newsletters/NewsletterContent";
import { NewsletterPageHeader } from "@/features/newsletter/components/NewsletterPageHeader";
import { NewsletterSectionSkeleton } from "@/features/newsletter/components/NewsletterSection/NewsletterSectionSkeleton";
import { userService } from "@/features/user/services";
import { Suspense } from "react";

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
    </>
  );
}
