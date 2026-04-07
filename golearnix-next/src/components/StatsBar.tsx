"use client";

import Reveal from "./Reveal";
import { Icons } from "./Icons";
import { useCounter } from "@/hooks/useReveal";

export default function StatsBar() {
  const [ref1, count1] = useCounter(10000, 2000);
  const [ref2, count2] = useCounter(500, 1800);
  const [ref3, count3] = useCounter(50, 1500);
  const [ref4, count4] = useCounter(5, 1000);

  return (
    <section className="py-16 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { ref: ref1, value: count1, suffix: "+", label: "Questions", icon: <Icons.Book /> },
            { ref: ref2, value: count2, suffix: "+", label: "Topics", icon: <Icons.Target /> },
            { ref: ref3, value: count3, suffix: "+", label: "Subjects", icon: <Icons.Stethoscope /> },
            { ref: ref4, value: count4, suffix: " Year", label: "Coverage", icon: <Icons.Shield /> },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div ref={stat.ref} className="text-center">
                <div className="icon-container mx-auto mb-3">{stat.icon}</div>
                <div className="font-heading text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-text-tertiary text-sm mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
