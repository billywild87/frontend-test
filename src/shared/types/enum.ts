/**
 * ENUM LIKE TYPES
 */

export const GENDER = { M: "M", F: "F" } as const;
export type Gender = (typeof GENDER)[keyof typeof GENDER];

export const SITE = {
  DEN: "DEN",
  DAN: "DAN",
  LAN: "LAN",
  SAN: "SAN",
} as const;
export type Site = (typeof SITE)[keyof typeof SITE];

export const SUBSCRIPTION_RIGHT = {
  RIGHT_1: "RIGHT_1",
  RIGHT_2: "RIGHT_2",
} as const;
export type SubscriptionRight =
  (typeof SUBSCRIPTION_RIGHT)[keyof typeof SUBSCRIPTION_RIGHT];
