import RedirectCountdown from "./RedirectCountdown";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.payingsurveys.homeworkjobs";

const stats = [
  { value: "1M+", label: "Active Earners", icon: "👥" },
  { value: "24/7", label: "Task Access", icon: "⚡" },
  { value: "KSh 1,000", label: "Welcome Bonus", icon: "🎁" },
];

const features = [
  { label: "Instant Withdrawals", icon: "⚡" },
  { label: "Secure Platform", icon: "🔒" },
  { label: "Mobile Friendly", icon: "📱" },
  { label: "Work Anywhere", icon: "🌍" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16 sm:py-20">
      {/* ambient glow, tuned to the app's deep-green identity */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-green-bright) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--accent-green)] shadow-sm">
          <span aria-hidden>✨</span>
          Trusted AI Earning Platform
        </div>

        {/* App icon — matches the Homework app mark: deep green tile, star + check */}
        <div
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl shadow-[0_12px_40px_-12px_rgba(13,61,41,0.55)]"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-green-deep), var(--accent-green))",
          }}
        >
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path
              d="M8 8v30M8 23h14M22 8v30"
              stroke="#ffffff"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 27l6 6L38 15"
              stroke="var(--accent-gold)"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-display mb-3 text-4xl font-extrabold tracking-tight text-[var(--accent-green-deep)] sm:text-5xl">
          Homework Jobs
        </h1>

        <p className="mb-4 text-lg font-semibold text-[var(--accent-green)]">
          Complete Tasks. Earn Daily via M-Pesa.
        </p>

        <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-[var(--text-muted)]">
          Join a growing community of Kenyans completing simple AI-powered
          surveys and tasks from their phone — with M-Pesa payouts you can
          request anytime.
        </p>

        {/* Stat cards */}
        <div className="mb-8 flex w-full flex-col gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-2xl border border-[var(--card-border)] bg-[var(--bg-elevated)] px-6 py-5 text-left shadow-sm"
            >
              <div>
                <p className="font-display text-2xl font-bold text-[var(--accent-green-deep)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-gold)]/15 text-xl">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="mb-10 flex w-full flex-wrap justify-center gap-3">
          {features.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--text-primary)] shadow-sm"
            >
              <span aria-hidden>{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>

        {/* CTA — mirrors the app's "View Tasks" button */}
        <a
          href={PLAY_STORE_URL}
          className="font-display mb-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(26,157,84,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-green), var(--accent-green-deep))",
          }}
        >
          Get Started — It's Free
          <span aria-hidden>→</span>
        </a>

        {/* Redirect countdown */}
        <div className="mb-12">
          <RedirectCountdown />
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-[var(--card-border)] pt-6 text-xs leading-relaxed text-[var(--text-muted)]">
          <p className="mb-2">
            <a href="#" className="underline-offset-2 hover:underline">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="underline-offset-2 hover:underline">
              Terms of Service
            </a>{" "}
            •{" "}
            <a
              href="mailto:outlier@outlook.com"
              className="underline-offset-2 hover:underline"
            >
              Contact Support
            </a>
          </p>
          <p>Powered by Advanced AI Training Technology</p>
          <p>Version 1.0 • © 2026 Homework Jobs</p>
        </footer>
      </div>
    </main>
  );
}
