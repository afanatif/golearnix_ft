"use client";

import Reveal from "./Reveal";
import { Icons } from "./Icons";

export default function Features() {
  const features = [
    { icon: <Icons.Book />, title: "Structured Practice", desc: "Questions organized by Year, Block, Module, Subject & Topic for surgical study precision." },
    { icon: <Icons.Timer />, title: "Timed Exams", desc: "Simulate real exam pressure with customizable timed sessions and instant feedback loops." },
    { icon: <Icons.Chart />, title: "Performance Analytics", desc: "Deep dive into your progress with heatmaps, weakness tracking, and peer comparison stats." },
    { icon: <Icons.Clipboard />, title: "Clinical Case Scenarios", desc: "High-yield clinical vignettes designed for the latest board exam patterns." },
    { icon: <Icons.Lightning />, title: "Lightning-Fast Review", desc: "Quick flashcards for last-minute revision sessions before your clinical rotations." },
    { icon: <Icons.Shield />, title: "Expert Verified Content", desc: "Every question reviewed by senior medical educators and board-certified physicians." },
  ];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-medical/5 border border-medical/10 rounded-full mb-4">
              <Icons.Zap />
              <span className="text-medical text-xs font-medium tracking-wider uppercase">Features</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
              Precision Tools for <span className="gradient-text">Medical Excellence</span>
            </h2>
            <p className="text-text-tertiary max-w-2xl mx-auto">
              Designed by medical educators to ensure your study time is efficient, effective, and results-driven.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="icon-container mb-5">{f.icon}</div>
                <h3 className="font-heading text-base font-semibold mb-2 text-text-primary">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
