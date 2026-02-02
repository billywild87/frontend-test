import { User } from "../types";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "./user.fixtures";

export const USER_SCENARIO = {
  NONE: "none",
  ONE: "one",
  MULTI: "multi",
} as const;

export type UserScenario = (typeof USER_SCENARIO)[keyof typeof USER_SCENARIO];

export const USER_SCENARIOS: Record<UserScenario, User> = {
  [USER_SCENARIO.NONE]: USER_WITHOUT_SUBSCRIPTION,
  [USER_SCENARIO.ONE]: USER_WITH_ONE_SUBSCRIPTION,
  [USER_SCENARIO.MULTI]: USER_WITH_MULTIPLE_SUBSCRIPTION,
};
