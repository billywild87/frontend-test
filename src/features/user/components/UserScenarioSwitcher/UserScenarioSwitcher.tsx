"use client";

import {
  buttonGroup,
  button,
  buttonActive,
} from "@/shared/components/dev/DevDrawer/devDrawer.styles";
import { fr } from "@/shared/i18n";
import { USER_SCENARIO, UserScenario } from "../../fixtures";

const SCENARIO_LABELS: Record<UserScenario, string> = {
  [USER_SCENARIO.NONE]: fr.user.scenario.none,
  [USER_SCENARIO.ONE]: fr.user.scenario.one,
  [USER_SCENARIO.MULTI]: fr.user.scenario.multi,
};

type Props = {
  current: UserScenario;
  onChange: (scenario: UserScenario) => void;
};

export function UserScenarioSwitcher({ current, onChange }: Props) {
  return (
    <div className={buttonGroup}>
      {Object.entries(SCENARIO_LABELS).map(([scenario, scenarioLabel]) => (
        <button
          key={scenario}
          className={`${button} ${scenario === current ? buttonActive : ""}`}
          onClick={() => onChange(scenario as UserScenario)}
        >
          {scenarioLabel}
        </button>
      ))}
    </div>
  );
}
