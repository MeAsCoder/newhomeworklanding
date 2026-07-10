"use client";

import { useEffect, useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.payingsurveys.homeworkjobs";
const REDIRECT_SECONDS = 1;

export default function RedirectCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const tick = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      window.location.href = PLAY_STORE_URL;
    }, REDIRECT_SECONDS * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(redirectTimer);
    };
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = (REDIRECT_SECONDS - secondsLeft) / REDIRECT_SECONDS;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="flex items-center gap-3 rounded-full border border-[var(--card-border)] bg-[var(--bg-elevated)] py-2 pl-2 pr-5">
      <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="var(--card-border)"
          strokeWidth="4"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="url(#countdownGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 28 28)"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <defs>
          <linearGradient id="countdownGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-gold)" />
            <stop offset="100%" stopColor="var(--accent-green)" />
          </linearGradient>
        </defs>
        <text
          x="28"
          y="33"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="var(--text-primary)"
          className="font-display"
        >
          {secondsLeft}
        </text>
      </svg>
      <div className="text-sm leading-tight">
        <p className="font-semibold text-[var(--text-primary)]">
          Opening Google Play
        </p>
        <p className="text-[var(--text-muted)]">
          Taking you to the Homework Jobs app…
        </p>
      </div>
    </div>
  );
}
