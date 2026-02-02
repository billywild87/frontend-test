import { USER_SCENARIO, UserScenario } from "../fixtures";

export function isValidUserScenario(
  value: string | undefined
): value is UserScenario {
  return Object.values(USER_SCENARIO).includes(value as UserScenario);
}
