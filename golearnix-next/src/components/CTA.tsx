"use client";

import Reveal from "./Reveal";
import { Icons } from "./Icons";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="orb-medical w-[500px] h-[500px] bg-blue-200/20 top-0 left-1/4" />
      <div className="orb-medical w-[400px] h-[400px] bg-teal-200/20 bottom-0 right-1/4" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
            Ready to <span className="gradient-text">Ace Your Exams</span>?
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Join thousands of medical students who have transformed their study habits with GoLearnix&apos;s editorial-grade clinical curriculum.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary px-10 py-4 text-white font-medium rounded-full inline-flex items-center justify-center gap-2 text-lg">
              Get Started Free <Icons.Arrow />
            </a>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              { value: "98%", label: "Pass Rate" },
              { value: "24/7", label: "Expert Support" },
              { value: "4.9★", label: "User Rating" },
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-2xl font-bold gradient-text">{badge.value}</div>
                <div className="text-text-tertiary text-xs mt-1">{badge.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
