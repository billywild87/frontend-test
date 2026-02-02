import { User } from "@/features/user/types";
import { GENDER, SUBSCRIPTION_RIGHT as RIGHT } from "@/shared/types";

const BASE_USER: Omit<User, "subscriptions"> = {
  id: "507f1f77bcf86cd799439011",
  firstName: "Jamie",
  lastName: "Doe",
  gender: GENDER.M,
  email: "jamie.doe@example.com",
};

export const USER_WITH_ONE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: [RIGHT.RIGHT_1],
};

export const USER_WITHOUT_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: [],
};

export const USER_WITH_MULTIPLE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: [RIGHT.RIGHT_1, RIGHT.RIGHT_2],
};
