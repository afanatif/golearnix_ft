"use client";

import Reveal from "./Reveal";
import { Icons } from "./Icons";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Get started with basic access",
      features: ["200 practice MCQs", "1 subject access", "Basic analytics", "Community support"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      desc: "Full access for serious students",
      features: ["10,000+ MCQs", "All subjects & years", "Advanced analytics & heatmaps", "Timed exam mode", "Clinical case scenarios", "Priority support"],
      cta: "Go Pro",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$7.99",
      period: "/month per user",
      desc: "For study groups & institutions",
      features: ["Everything in Pro", "Up to 50 members", "Group analytics dashboard", "Custom question sets", "Admin controls", "Dedicated support"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/5 border border-teal/10 rounded-full mb-4">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal text-xs font-medium tracking-wider uppercase">Pricing</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
              Invest in Your <span className="gradient-text">Medical Career</span>
            </h2>
            <p className="text-text-tertiary max-w-xl mx-auto">
              Less than the cost of one textbook. Unlimited access to everything.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className={`glass-card rounded-2xl p-7 h-full flex flex-col ${p.highlighted ? "pricing-highlight" : ""}`}>
                <div className="mb-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-1">{p.name}</h3>
                  <p className="text-text-tertiary text-sm">{p.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold text-text-primary">{p.price}</span>
                  <span className="text-text-tertiary text-sm">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start text-sm text-text-secondary">
                      <span className="flex-shrink-0 mr-2 mt-0.5"><Icons.Check /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/signup" className={`w-full py-3 rounded-full text-center font-medium text-sm transition-all ${p.highlighted ? "btn-primary text-white" : "btn-secondary text-text-primary"}`}>
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
