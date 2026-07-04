import { useState } from "react";
import { z } from "zod";
import { PillButton } from "@/components/ui-brand/PillButton";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  business: z.string().trim().min(1, "Please enter your business name").max(120),
  service: z.string().min(1, "Please pick a service"),
  message: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)").max(2000),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-[color:var(--surface-elevated)] p-10 text-center">
        <h3 className="text-2xl font-semibold">Thanks — we'll be in touch.</h3>
        <p className="mt-3 text-[color:var(--ink-soft)]">
          We reply to every inquiry within one business day. Usually much faster.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-[color:var(--surface-elevated)] p-8 md:p-10 space-y-5"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} />
        <Field label="Email" name="email" type="email" error={errors.email} />
      </div>
      <Field label="Business name" name="business" error={errors.business} />
      <div>
        <label className="block text-sm font-medium mb-2">Service you're interested in</label>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--ink)]"
        >
          <option value="" disabled>
            Pick one…
          </option>
          <option value="website">Website Building</option>
          <option value="social">Social Media Management</option>
          <option value="content">Content Marketing</option>
          <option value="all">Full-Service / Not sure yet</option>
        </select>
        {errors.service && <p className="mt-1.5 text-sm text-red-500">{errors.service}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">What are you working on?</label>
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--ink)] resize-none"
          placeholder="A few sentences on your business and what you'd like help with."
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
      </div>
      <PillButton type="submit" className="w-full md:w-auto">
        Send inquiry
      </PillButton>
      <p className="text-xs text-[color:var(--ink-soft)]">
        You'll hear back from a real person — usually the one who'd run your account.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--ink)]"
      />
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
