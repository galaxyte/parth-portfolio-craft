import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faCircleCheck,
  faCircleExclamation,
  faCopy,
  faCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cardHover } from "@/lib/motion";
import { useReplayInView } from "@/hooks/use-replay-in-view";

const ease = [0.22, 1, 0.36, 1] as const;

const fieldClass =
  "h-11 w-full rounded-xl border border-zinc-200/90 dark:border-zinc-700/90 bg-zinc-50/80 dark:bg-zinc-800/80 px-3.5 text-sm text-zinc-900 dark:text-zinc-50 shadow-sm placeholder:text-zinc-400 transition-all duration-200 focus-visible:border-blue-500 focus-visible:bg-white dark:focus-visible:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-500/25 focus-visible:ring-offset-0 dark:placeholder:text-zinc-500";

const textareaClass =
  "min-h-[120px] w-full resize-y rounded-xl border border-zinc-200/90 dark:border-zinc-700/90 bg-zinc-50/80 dark:bg-zinc-800/80 px-3.5 py-3 text-sm text-zinc-900 dark:text-zinc-50 shadow-sm placeholder:text-zinc-400 transition-all duration-200 focus-visible:border-blue-500 focus-visible:bg-white dark:focus-visible:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-500/25 focus-visible:ring-offset-0 dark:placeholder:text-zinc-500";

export const Contact = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="relative overflow-hidden py-8 md:py-10 section-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(37,99,235,0.08), transparent 42%), radial-gradient(circle at 88% 70%, rgba(37,99,235,0.06), transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Connect
          </p>
          <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
            <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-5xl">
              Get In Touch
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 dark:border-emerald-800/80 bg-emerald-50/90 dark:bg-emerald-950/50 px-2.5 py-1 font-body text-[11px] font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
              <FontAwesomeIcon icon={faCircle} className="text-[6px] text-emerald-500 animate-pulse" />
              Open to work
            </span>
          </div>
          <p className="mx-auto max-w-3xl font-body text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <ContactPanel />
          <FormPanel />
        </div>
      </div>
    </section>
  );
};

const ContactPanel = () => {
  const reveal = useReplayInView(0);
  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className="relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/70 dark:bg-zinc-900/70 p-5 shadow-lg shadow-zinc-200/40 backdrop-blur-xl sm:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mb-5 flex items-center gap-3">
        <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-500 to-blue-600" />
        <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-3xl">
          Contact Information
        </h3>
      </div>

      <div className="relative space-y-3">
        <ContactInfoCard
          icon={faEnvelope}
          title="Email"
          value="parthjtgjs851@gmail.com"
          href="mailto:parthjtgjs851@gmail.com"
          copyValue="parthjtgjs851@gmail.com"
          accent="blue"
          index={0}
        />
        <ContactInfoCard
          icon={faPhone}
          title="Phone"
          value="+91 9211975266"
          href="tel:+919211975266"
          copyValue="+919211975266"
          accent="zinc"
          index={1}
        />
        <ContactInfoCard
          icon={faLocationDot}
          title="Location"
          value="Noida, India"
          accent="zinc"
          index={2}
        />
      </div>

      <div className="relative mt-5 border-t border-zinc-200/80 dark:border-zinc-700/80 pt-4">
        <div className="flex items-center gap-2.5">
          {[
            { href: "https://github.com/galaxyte", icon: faGithub, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/parth-tiwari-a56335291/",
              icon: faLinkedin,
              label: "LinkedIn",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -2, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 dark:border-zinc-700/90 bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 shadow-sm transition-colors hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfoCard = ({
  icon,
  title,
  value,
  href,
  copyValue,
  accent,
  index,
}: {
  icon: IconDefinition;
  title: string;
  value: string;
  href?: string;
  copyValue?: string;
  accent: "blue" | "zinc";
  index: number;
}) => {
  const [copied, setCopied] = useState(false);
  const reveal = useReplayInView(index);

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  const iconWrap =
    accent === "blue"
      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30"
      : "bg-gradient-to-br from-zinc-700 to-zinc-900 text-white shadow-md shadow-zinc-400/30";

  const content = (
    <>
      <motion.div
        whileHover={{ scale: 1.06, rotate: -3 }}
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconWrap}`}
      >
        <FontAwesomeIcon icon={icon} className="text-sm" />
      </motion.div>

      <div className="min-w-0 flex-1">
        <h4 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-50">{title}</h4>
        <p className="truncate font-body text-sm text-zinc-600 dark:text-zinc-400 sm:text-[15px]">{value}</p>
      </div>

      {copyValue && (
        <motion.button
          type="button"
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          aria-label={copied ? "Copied" : `Copy ${title}`}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            copied
              ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 text-emerald-600"
              : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xs" />
        </motion.button>
      )}
    </>
  );

  const shellClass =
    "group relative flex w-full items-center gap-3.5 overflow-hidden rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/70 hover:shadow-md hover:shadow-blue-500/10";

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
    >
      {href ? (
        <a href={href} className={shellClass}>
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          {content}
        </a>
      ) : (
        <div className={shellClass}>
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          {content}
        </div>
      )}
    </motion.div>
  );
};

const FormPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "activate">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const reveal = useReplayInView(1);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

      if (web3Key) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            ...payload,
            from_name: payload.name,
            replyto: payload.email,
          }),
        });

        const result = (await response.json()) as {
          success?: boolean;
          message?: string;
        };

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to send message");
        }
      } else {
        const response = await fetch(
          "https://formsubmit.co/ajax/parthjtgjs851@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...payload,
              _replyto: payload.email,
              _subject: `Portfolio Contact: ${payload.subject}`,
              _template: "table",
              _captcha: "false",
            }),
          }
        );

        const result = (await response.json().catch(() => null)) as {
          success?: boolean | string;
          message?: string;
        } | null;

        const failed =
          !response.ok ||
          result?.success === false ||
          result?.success === "false";

        if (failed) {
          const msg = result?.message || "Failed to send message";
          if (/activat/i.test(msg)) {
            setSubmitStatus("activate");
            setStatusMessage(
              "Check parthjtgjs851@gmail.com inbox (and Spam) — open the FormSubmit mail and click Activate Form. Then send again."
            );
            return;
          }
          throw new Error(msg);
        }
      }

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className="relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/75 dark:bg-zinc-900/75 p-5 shadow-xl shadow-zinc-200/40 backdrop-blur-xl sm:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-blue-500/8 blur-3xl"
      />

      <div className="relative mb-5 flex items-center gap-3">
        <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-500 to-blue-600" />
        <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-3xl">
          Send Message
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-4 font-body" noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            id="name"
            label="Name *"
            error={errors.name}
            focused={focused === "name"}
          >
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${fieldClass} ${errors.name ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}`}
              required
            />
          </Field>

          <Field
            id="email"
            label="Email *"
            error={errors.email}
            focused={focused === "email"}
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${fieldClass} ${errors.email ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}`}
              required
            />
          </Field>
        </div>

        <Field
          id="subject"
          label="Subject *"
          error={errors.subject}
          focused={focused === "subject"}
        >
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`${fieldClass} ${errors.subject ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}`}
            required
          />
        </Field>

        <Field
          id="message"
          label="Message *"
          error={errors.message}
          focused={focused === "message"}
        >
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me more about your project or inquiry..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${textareaClass} ${errors.message ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20" : ""}`}
            required
          />
        </Field>

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-11 w-full cursor-pointer rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                Send Message
              </span>
            )}
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitStatus === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-start gap-2 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/90 dark:bg-emerald-950/50 px-3.5 py-2.5 text-sm text-emerald-700 dark:text-emerald-400"
              role="status"
            >
              <FontAwesomeIcon icon={faCircleCheck} className="mt-0.5 shrink-0" />
              <span>{statusMessage || "Message sent successfully! I'll get back to you soon."}</span>
            </motion.div>
          )}

          {submitStatus === "activate" && (
            <motion.div
              key="activate"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-start gap-2 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/90 dark:bg-amber-950/40 px-3.5 py-2.5 text-sm text-amber-800 dark:text-amber-300"
              role="status"
            >
              <FontAwesomeIcon icon={faCircleExclamation} className="mt-0.5 shrink-0" />
              <span>{statusMessage}</span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-start gap-2 rounded-xl border border-red-200 dark:border-red-900 bg-red-50/90 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-400"
              role="alert"
            >
              <FontAwesomeIcon icon={faCircleExclamation} className="mt-0.5 shrink-0" />
              <span>{statusMessage || "Something went wrong. Please try again."}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

const Field = ({
  id,
  label,
  error,
  focused,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  focused: boolean;
  children: ReactNode;
}) => (
  <motion.div
    animate={{ scale: focused ? 1.005 : 1 }}
    transition={{ duration: 0.18 }}
  >
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
      {label}
    </label>
    {children}
    {error && (
      <div
        id={`${id}-error`}
        className="mt-1.5 flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
        role="alert"
      >
        <FontAwesomeIcon icon={faCircleExclamation} className="text-xs" />
        {error}
      </div>
    )}
  </motion.div>
);
