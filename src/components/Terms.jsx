import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const termsHighlights = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe booking rules",
    description:
      "We set clear expectations for reservations, changes, cancellations, and passenger conduct to keep trips predictable.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Verified usage",
    description:
      "Accounts and payment actions should be accurate, authorized, and used only for lawful travel purposes.",
  },
  {
    icon: <BriefcaseBusiness className="h-6 w-6" />,
    title: "Business continuity",
    description:
      "We may update services, routes, pricing, or platform features to respond to operational and legal requirements.",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Fair limits",
    description:
      "Our liability and dispute processes are described clearly so travelers know what to expect if issues arise.",
  },
];

const termsSections = [
  {
    title: "Acceptance of terms",
    body: "By using JetSetGo, you agree to these terms and to any additional rules that apply to specific products, bookings, promotions, or partner services.",
  },
  {
    title: "Bookings and payments",
    body: "You are responsible for providing accurate traveler details, reviewing fare conditions, and completing payment only with authorized methods. Ticket changes, refunds, and credits are subject to fare rules and availability.",
  },
  {
    title: "User responsibilities",
    body: "You must keep account credentials secure, respect crew and staff instructions, and avoid disruptive, unlawful, or abusive behavior when using our services.",
  },
  {
    title: "Intellectual property",
    body: "All content, branding, interfaces, and software elements provided by JetSetGo are protected and may not be copied, modified, or distributed without permission.",
  },
  {
    title: "Service changes and interruptions",
    body: "We may update, suspend, or discontinue features when needed for maintenance, compliance, or service quality. We work to minimize disruption, but uninterrupted availability is not guaranteed.",
  },
  {
    title: "Disputes and governing rules",
    body: "Any dispute resolution, governing law, or venue rules that apply to your booking will be identified in the relevant ticketing or service documents and may vary by region.",
  },
];

const rulePoints = [
  { value: "24/7", label: "Support for booking questions" },
  { value: "6", label: "Core policy sections" },
  { value: "1", label: "Clear agreement standard" },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_30%),linear-gradient(135deg,_#111827_0%,_#0f172a_52%,_#1f2937_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-8 top-12 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute left-4 bottom-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <FileText className="h-4 w-4 text-amber-300" />
              Terms for a smoother travel experience
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              These terms explain how JetSetGo services can be used, what
              travelers and account holders are responsible for, and the rules
              that help keep bookings, payments, and support interactions fair.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {rulePoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm shadow-2xl shadow-slate-950/20"
              >
                <div className="text-3xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-slate-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="space-y-6">
              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70">
                <div className="flex items-center gap-3 text-amber-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Quick guide
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  What these terms protect
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The rules below protect travelers, staff, and the platform
                  itself by making booking expectations, conduct standards, and
                  service boundaries explicit.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-200"
                >
                  Ask about a booking
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {termsHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-amber-50 p-3 text-amber-700">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <div className="flex items-center gap-3 text-amber-700">
                  <CalendarDays className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Last updated
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-950">
                  13 July 2026
                </p>
                <p className="mt-3 leading-7 text-slate-600">
                  We may change these terms when services, laws, or business
                  needs change. Continued use of JetSetGo after an update means
                  you accept the revised terms.
                </p>
              </div>

              {termsSections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {section.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                    {section.body}
                  </p>
                </article>
              ))}

              <div className="rounded-3xl border border-amber-100 bg-amber-50 p-8 shadow-lg shadow-amber-100/60">
                <div className="flex items-center gap-3 text-amber-800">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Important reminder
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                  Bookings are subject to fare and partner rules
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Airline schedules, baggage allowances, seat assignments,
                  partner services, and refund conditions may vary by route or
                  fare type. Review the specific trip details before paying or
                  traveling.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/help"
                    className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Read travel help
                  </Link>
                  <Link
                    to="/privacy"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-100"
                  >
                    View privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
