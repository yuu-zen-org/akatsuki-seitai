"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

const SYMPTOMS = [
  "腰痛・ぎっくり腰",
  "肩こり・首の痛み",
  "膝の痛み",
  "股関節痛",
  "坐骨神経痛・しびれ",
  "産後の不調",
  "自律神経・めまい・不眠",
  "その他",
];

const initial: ContactState = {};

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-[12px] text-red-500">{errors[0]}</p>;
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  return (
    <form action={action} className="space-y-7">
      {/* honeypot */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* サーバーエラー */}
      {state.message && (
        <div className="rounded-xl bg-red-50 px-5 py-4 text-sm text-red-600">
          {state.message}
        </div>
      )}

      {/* お名前 */}
      <div>
        <label className="block text-sm font-bold" htmlFor="name">
          お名前 <span className="ml-1 text-[11px] font-normal text-primary">必須</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="山田 花子"
          className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <FieldError errors={state.errors?.name} />
      </div>

      {/* 電話番号 */}
      <div>
        <label className="block text-sm font-bold" htmlFor="phone">
          電話番号 <span className="ml-1 text-[11px] font-normal text-primary">必須</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="090-0000-0000"
          className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <FieldError errors={state.errors?.phone} />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-sm font-bold" htmlFor="email">
          メールアドレス <span className="ml-1 text-[11px] font-normal text-primary">必須</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="example@mail.com"
          className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <FieldError errors={state.errors?.email} />
      </div>

      {/* ご希望日時 */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-bold" htmlFor="date1">
            第1希望日時 <span className="ml-1 text-[11px] font-normal text-primary">必須</span>
          </label>
          <input
            id="date1"
            name="date1"
            type="text"
            placeholder="例：6月10日 午前"
            className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <FieldError errors={state.errors?.date1} />
        </div>
        <div>
          <label className="block text-sm font-bold" htmlFor="date2">
            第2希望日時
          </label>
          <input
            id="date2"
            name="date2"
            type="text"
            placeholder="例：6月12日 午後"
            className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* 症状・相談内容 */}
      <div>
        <label className="block text-sm font-bold" htmlFor="symptom">
          症状・ご相談内容
        </label>
        <select
          id="symptom"
          name="symptom"
          className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        >
          <option value="">選択してください（任意）</option>
          {SYMPTOMS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* メッセージ */}
      <div>
        <label className="block text-sm font-bold" htmlFor="message">
          メッセージ・その他ご要望
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="症状の詳細、気になることなどご自由にお書きください。"
          className="mt-2 w-full rounded-xl border border-border-light bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[13px] bg-gradient-to-br from-[#f39a3e] to-[#e77a22] px-8 py-4 font-bold text-white transition-opacity disabled:opacity-60"
      >
        {pending ? "送信中…" : "送信する"}
      </button>

      <p className="text-center text-[11px] text-text-muted">
        送信後、確認メールをお送りします。2営業日以内にご連絡いたします。
      </p>
    </form>
  );
}
