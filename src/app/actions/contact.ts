"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  date1: z.string().min(1, "第1希望日時を入力してください"),
  date2: z.string().optional(),
  symptom: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0, ""),
});

export type ContactState = {
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>;
  message?: string;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const date1val = formData.get("date1") as string;
  const time1val = formData.get("time1") as string;
  const date2val = (formData.get("date2") as string) ?? "";
  const time2val = (formData.get("time2") as string) ?? "";

  const raw = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    date1: date1val ? `${date1val} ${time1val}`.trim() : "",
    date2: date2val ? `${date2val} ${time2val}`.trim() : "",
    symptom: (formData.get("symptom") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
    honeypot: (formData.get("honeypot") as string) ?? "",
  };

  const result = schema.safeParse(raw);
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const { name, phone, email, date1, date2, symptom, message } = result.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const to = (process.env.RESEND_TO ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  const bodyToClinic = `
【整体院楓月-Akatsuki- 泉中央院 お問い合わせ】

■ お名前：${name}
■ 電話番号：${phone}
■ メールアドレス：${email}
■ ご希望日時（第1希望）：${date1}
■ ご希望日時（第2希望）：${date2 || "なし"}
■ 症状・ご相談内容：${symptom || "なし"}
■ メッセージ：
${message || "なし"}
`.trim();

  const bodyToUser = `
${name} 様

この度はお問い合わせいただきありがとうございます。
整体院楓月-Akatsuki- 泉中央院です。

内容を確認の上、2営業日以内にご連絡いたします。
お急ぎの場合はお電話（022-725-4546）にてご連絡ください。

──────────────────────
■ お問い合わせ内容
──────────────────────
お名前：${name}
電話番号：${phone}
メールアドレス：${email}
ご希望日時（第1希望）：${date1}
ご希望日時（第2希望）：${date2 || "なし"}
症状・ご相談内容：${symptom || "なし"}
メッセージ：${message || "なし"}
──────────────────────

整体院 楓月 泉中央院
〒${process.env.NEXT_PUBLIC_POSTAL ?? "981-3133"} 宮城県仙台市泉区泉中央4-18-2
TEL: 022-725-4546
`.trim();

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to,
        subject: `【整体院楓月-Akatsuki- 泉中央院】お問い合わせ：${name} 様`,
        text: bodyToClinic,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "【整体院楓月-Akatsuki- 泉中央院】お問い合わせを受け付けました",
        text: bodyToUser,
      }),
    ]);
  } catch {
    return { message: "送信に失敗しました。お手数ですがお電話にてご連絡ください。" };
  }

  redirect("/thanks");
}
