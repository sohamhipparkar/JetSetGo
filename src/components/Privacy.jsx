import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  Eye,
  Globe2,
  Lock,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const privacyHighlights = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Data minimization",
    description:
      "We only collect the information needed to process bookings, support your account, and improve the travel experience.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Security by design",
    description:
      "Operational and technical safeguards are used to protect personal data during storage, transfer, and access.",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Global services",
    description:
      "Information may be processed across regions to support international trips, partners, and customer assistance.",
  },
  {
    icon: <MessageSquareText className="h-6 w-6" />,
    title: "Clear control",
    description:
      "You can request access, correction, deletion, or updates to your data through our support channels.",
  },
];

const policySections = [
  {
    title: "Information we collect",
    body: "We may collect profile details, contact information, booking data, payment and billing information, device identifiers, and usage signals when you use JetSetGo services, visit our site, or communicate with support.",
  },
  {
    title: "How we use it",
    body: "Your data helps us process reservations, send confirmations, personalize trip options, prevent fraud, deliver customer service, and improve product reliability and performance.",
  },
  {
    title: "Sharing and disclosure",
    body: "We share information only when needed to complete a booking, comply with law, protect rights and safety, or work with trusted vendors that help us operate the platform.",
  },
  {
    title: "Cookies and analytics",
    body: "We use cookies and similar technologies to remember preferences, measure site performance, and understand how travelers interact with our pages and booking flows.",
  },
  {
    title: "Retention",
    body: "We retain personal data for as long as necessary to provide services, meet legal obligations, resolve disputes, and enforce agreements, then delete or anonymize it where appropriate.",
  },
  {
    title: "Your rights",
    body: "Depending on your location, you may have rights to access, update, restrict, export, or delete your personal information and to object to certain processing activities.",
  },
];

const dataPoints = [
  { value: "24/7", label: "Support for privacy requests" },
  { value: "48 hrs", label: "Typical response window" },
  { value: "100%", label: "Encrypted payment handling" },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(45,212,191,0.2),_transparent_28%),linear-gradient(135deg,_#0f172a_0%,_#111827_45%,_#172554_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Privacy built for modern travel
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your data, handled with care.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              JetSetGo collects only the information needed to help you book
              faster, travel safely, and get support when you need it. This page
              explains what we collect, why we use it, and the choices you have.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {dataPoints.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <div className="flex items-center gap-3 text-cyan-700">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    What this policy covers
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  A straightforward privacy promise
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  We respect the trust you place in us when you search routes,
                  store passenger details, or complete a reservation. Our
                  privacy practices are designed to keep that information secure
                  while keeping the booking experience efficient and personal.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {privacyHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700">
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
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70">
                <div className="flex items-center gap-3 text-cyan-300">
                  <CalendarDays className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Last updated
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold">13 July 2026</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We may update this policy from time to time to reflect product
                  changes, legal requirements, or service improvements. Material
                  changes will be posted here with a revised date.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  Contact privacy support
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <h3 className="text-xl font-semibold text-slate-950">
                  How to reach us
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For questions, requests, or complaints about this policy,
                  contact our support team and reference privacy in the subject
                  line so we can direct it quickly.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    support@jetsetgo.com
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    privacy@jetsetgo.com
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    Corporate office support through the contact page
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid gap-6">
            {policySections.map((section, index) => (
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
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-100 bg-cyan-50 p-8 shadow-lg shadow-cyan-100/60">
            <h2 className="text-2xl font-semibold text-slate-950">
              Your choices matter
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-700">
              If you want to review your data, adjust communication preferences,
              or request deletion where permitted, reach out and we will guide
              you through the available options. We aim to keep that process
              simple and transparent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/help"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Visit help center
              </Link>
              <Link
                to="/terms"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-100"
              >
                Read terms of service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
