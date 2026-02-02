import type { Email, Gender, SubscriptionRight, UserId } from "@/shared/types";

export interface User {
  id: UserId;
  firstName: string;
  lastName: string;
  gender: Gender;
  email: Email;
  subscriptions: SubscriptionRight[];
}
