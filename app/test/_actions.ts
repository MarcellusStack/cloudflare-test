"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const RevalidateAction = async () => {
  revalidateTag("cocktail");
  revalidatePath("/test");
  console.log("revalidateBtn clicked");
};
