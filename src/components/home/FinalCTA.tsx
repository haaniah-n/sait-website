import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./home-final.css";

export function FinalCTA() {
  return (
    <section className="home-final chapter-cta" aria-labelledby="chapter-heading">
      <svg className="chapter-orbit" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="chapter-horizon-bloom">
            <stop offset="0" stopColor="var(--accent)" stopOpacity=".2" />
            <stop offset=".45" stopColor="var(--accent)" stopOpacity=".08" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="chapter-horizon-light" gradientUnits="userSpaceOnUse" x1="340" y1="0" x2="1100" y2="0">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset=".5" stopColor="var(--accent)" stopOpacity=".8" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle className="chapter-orbit-line" cx="720" cy="520" r="440" />
        <circle className="chapter-orbit-node" cx="347" cy="286" r="3.5" />
        <circle className="chapter-orbit-node" cx="1040" cy="218" r="3.5" />
        <ellipse className="chapter-horizon-bloom" cx="720" cy="653" rx="380" ry="65" fill="url(#chapter-horizon-bloom)" />
        <path className="chapter-horizon" d="M-100 786 Q720 560 1540 786" />
        <path className="chapter-horizon-highlight" d="M-100 786 Q720 560 1540 786" fill="none" stroke="url(#chapter-horizon-light)" strokeWidth="1.5" />
      </svg>
      <div className="chapter-content">
        <div className="chapter-signal" aria-hidden="true"><span /></div>
        <p className="chapter-eyebrow">YOUR NEXT CHAPTER</p>
        <h2 id="chapter-heading">Now it&apos;s<br /><span>your</span> turn.</h2>
        <p className="chapter-copy">Join the people learning, building, creating and contributing across SAIT.</p>
        <Link href="/contact" className="chapter-button">Get Involved <ArrowRight size={19} aria-hidden="true" /></Link>
        <p className="chapter-values"><span>LEARN / BUILD /</span>{" "}<span>CONNECT / CONTRIBUTE</span></p>
      </div>
    </section>
  );
}
