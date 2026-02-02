/**
 * Utility Collection Functions
 */

export function groupBy<T, K extends PropertyKey>(
  items: readonly T[],
  getKey: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;

  for (const item of items) {
    const key = getKey(item);
    (result[key] ??= []).push(item);
  }

  return result;
}
