"use server";

import { contactSchema } from "@/lib/contact";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContact(
  values: unknown,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "입력값이 올바르지 않습니다." };
  }

  // 실제 저장/이메일 발송은 6~8주차(DB/통합) 몫 — 지금은 서버에서 실행되는지 확인용 로그.
  console.log(
    "[server action] contact submission received:",
    JSON.stringify(parsed.data),
  );
  return { success: true };
}
