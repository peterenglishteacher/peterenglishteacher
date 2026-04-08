"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import type { ContactFormState } from "@/types";
import type { SiteContent } from "@/types";

interface ContactFormProps {
  content: SiteContent["contact"]["form"];
  locale: string;
}

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm({ content, locale }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          {content.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={content.namePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          {content.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={content.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          {content.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={content.phonePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
        />
        {state.errors?.phone && (
          <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          {content.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={content.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-vertical"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-red-600/20"
      >
        {isPending ? content.sending : content.submit}
      </button>

      {state.message && (
        <div
          className={`p-4 rounded-lg text-sm font-medium ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
          role="alert"
        >
          {state.success ? content.success : state.message || content.error}
        </div>
      )}
    </form>
  );
}
