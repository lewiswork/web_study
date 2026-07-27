import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해 주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
