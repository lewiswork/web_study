"use server";

import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export async function login(formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login?error=invalid-credentials");
    }
    throw error;
  }
}
