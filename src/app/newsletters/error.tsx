"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui";
import { fr } from "@/shared/i18n";
import { setNewsletterScenario } from "./_services/devState.actions";
import { NEWSLETTER_SCENARIO } from "@/features/newsletter";
import { container, title, description } from "./error.styles";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("Newsletter page error:", error);
  }, [error]);

  const handleRetry = async () => {
    await setNewsletterScenario(NEWSLETTER_SCENARIO.ALL);
    reset();
  };

  return (
    <div className={container}>
      <h2 className={title}>{fr.newsletter.error.title}</h2>
      <p className={description}>{fr.newsletter.error.description}</p>
      <Button variant="primary" size="md" onClick={handleRetry}>
        {fr.common.error.retry}
      </Button>
    </div>
  );
}
