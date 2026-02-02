"use server";

import { redirect } from "next/navigation";

const page = () => {
  redirect("/newsletters");
};

export default page;
