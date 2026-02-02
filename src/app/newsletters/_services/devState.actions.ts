"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { DEV_COOKIE_KEY } from "./devState.service";

export async function setUserScenario(scenario: string) {
  if (process.env.NODE_ENV === "production") return;

  const cookieStore = await cookies();
  cookieStore.set(DEV_COOKIE_KEY.USER_SCENARIO, scenario, { path: "/" });
  revalidatePath("/newsletters");
}

export async function setNewsletterScenario(scenario: string) {
  if (process.env.NODE_ENV === "production") return;

  const cookieStore = await cookies();
  cookieStore.set(DEV_COOKIE_KEY.NEWSLETTER_SCENARIO, scenario, { path: "/" });
  revalidatePath("/newsletters");
}
