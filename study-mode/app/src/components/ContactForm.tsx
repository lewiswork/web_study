"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해 주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    // Server Action 연동은 4-5주차 몫 — 지금은 검증 흐름만 확인.
    console.log("contact form submitted:", values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex max-w-sm flex-col gap-4 rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800"
    >
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-black dark:text-zinc-50">Name</span>
        <input
          type="text"
          placeholder="Ada Lovelace"
          {...register("name")}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-800 dark:text-zinc-50 dark:focus:border-white dark:focus:ring-white"
        />
        {errors.name && (
          <span className="text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-black dark:text-zinc-50">
          Email
        </span>
        <input
          type="email"
          placeholder="ada@example.com"
          {...register("email")}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-800 dark:text-zinc-50 dark:focus:border-white dark:focus:ring-white"
        />
        {errors.email && (
          <span className="text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-50 dark:hover:bg-[#ccc]"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-sm text-green-600 dark:text-green-400">
          메시지가 전송되었습니다. (콘솔 로그 확인용 목업)
        </p>
      )}
    </form>
  );
}
