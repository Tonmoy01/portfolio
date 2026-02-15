"use client";

import { FormEvent, useState, useRef } from "react";
import { Icon } from "@iconify/react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function HireMe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mdtonmoykhan65@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or email directly."
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section id="hire-me" className="mb-20 animate-enter delay-500">
      <div className="relative rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-text-heading mb-4">Let&apos;s work together</h2>
              <p className="text-text-body leading-relaxed mb-8 text-base">
                Currently open to new opportunities and freelance projects. If you have a project in mind or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <button onClick={copyEmail} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-heading transition-colors p-3 rounded-lg hover:bg-surface-hover border border-transparent hover:border-border-primary w-fit -ml-3 cursor-pointer">
                <Icon icon={emailCopied ? "lucide:check" : "lucide:mail"} width={18} className={emailCopied ? "text-emerald-400" : "text-text-muted"} />
                {emailCopied ? "Copied!" : "mdtonmoykhan65@gmail.com"}
              </button>
              <a href="https://wa.me/8801777671455" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-heading transition-colors p-3 rounded-lg hover:bg-surface-hover border border-transparent hover:border-border-primary w-fit -ml-3">
                <Icon icon="lucide:phone" width={18} className="text-text-muted" />
                +8801777671455
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary p-3 w-fit -ml-3">
                <Icon icon="lucide:map-pin" width={18} className="text-text-muted" />
                Manikganj, Bangladesh
              </div>
            </div>
          </div>

          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-text-muted ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full bg-surface-input border border-border-primary rounded-lg px-4 py-2.5 text-sm text-text-emphasis focus:outline-none focus:border-border-strong focus:ring-1 focus:ring-focus-ring transition-all placeholder:text-placeholder"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-text-muted ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full bg-surface-input border border-border-primary rounded-lg px-4 py-2.5 text-sm text-text-emphasis focus:outline-none focus:border-border-strong focus:ring-1 focus:ring-focus-ring transition-all placeholder:text-placeholder"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-medium text-text-muted ml-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-surface-input border border-border-primary rounded-lg px-4 py-2.5 text-sm text-text-emphasis focus:outline-none focus:border-border-strong focus:ring-1 focus:ring-focus-ring transition-all placeholder:text-placeholder"
                placeholder="Project inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-text-muted ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-surface-input border border-border-primary rounded-lg px-4 py-3 text-sm text-text-emphasis focus:outline-none focus:border-border-strong focus:ring-1 focus:ring-focus-ring transition-all placeholder:text-placeholder resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
                <Icon icon="lucide:check-circle" width={18} />
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                <Icon icon="lucide:alert-circle" width={18} />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-cta-bg text-cta-text font-medium text-sm py-2.5 rounded-lg hover:bg-cta-hover hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_var(--color-cta-shadow)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "loading" ? (
                <>
                  <Icon icon="lucide:loader-2" width={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Icon icon="lucide:arrow-right" width={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
