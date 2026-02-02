export const MOCK = { NEWSLETTER: "NEWSLETTER", USER: "USER" } as const;
export type Mock = (typeof MOCK)[keyof typeof MOCK];

const MOCKED_FEATURES: ReadonlySet<Mock> = new Set([
  MOCK.NEWSLETTER,
  MOCK.USER,
]);

export const isMockEnabled = (feature: Mock) => MOCKED_FEATURES.has(feature);
