"use client";

import {
  button,
  buttonActive,
  buttonGroup,
} from "@/shared/components/dev/DevDrawer/devDrawer.styles";
import { fr } from "@/shared/i18n";
import { NEWSLETTER_SCENARIO, NewsletterScenario } from "../../fixtures";

const SCENARIO_LABELS: Record<NewsletterScenario, string> = {
  [NEWSLETTER_SCENARIO.ALL]: fr.newsletter.scenario.all,
  [NEWSLETTER_SCENARIO.EMPTY]: fr.newsletter.scenario.empty,
  [NEWSLETTER_SCENARIO.ERROR]: fr.newsletter.scenario.error,
};

type Props = {
  current: NewsletterScenario;
  onChange: (scenario: NewsletterScenario) => void;
};

export function NewsletterScenarioSwitcher({ current, onChange }: Props) {
  return (
    <div className={buttonGroup}>
      {Object.entries(SCENARIO_LABELS).map(([scenario, scenarioLabel]) => (
        <button
          key={scenario}
          className={`${button} ${scenario === current ? buttonActive : ""}`}
          onClick={() => onChange(scenario as NewsletterScenario)}
        >
          {scenarioLabel}
        </button>
      ))}
    </div>
  );
}
