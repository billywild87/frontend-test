import { isMockEnabled, MOCK } from "@/shared/config";
import { sleep } from "@/shared/utils";
import { USER_SCENARIO, USER_SCENARIOS, UserScenario } from "../fixtures";
import { User } from "../types";

export const userService = {
  async getCurrent(scenario: UserScenario = USER_SCENARIO.NONE): Promise<User> {
    if (isMockEnabled(MOCK.USER)) {
      await sleep(300);
      return USER_SCENARIOS[scenario];
    }
    throw new Error("API not implemented");
  },
};
