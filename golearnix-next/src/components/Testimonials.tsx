"use client";

import Reveal from "./Reveal";
import { Icons } from "./Icons";

export default function Testimonials() {
  const testimonials = [
    { name: "Ayesha K.", role: "3rd Year MBBS", text: "GoLearnix completely changed how I study. The structured approach by blocks and topics makes revision so much more efficient.", rating: 5, avatar: "AK" },
    { name: "Omar R.", role: "Final Year MBBS", text: "The clinical case scenarios are incredibly high-yield. I scored in the top 10% on my clinical exams thanks to this platform.", rating: 5, avatar: "OR" },
    { name: "Sara M.", role: "2nd Year MBBS", text: "The analytics dashboard helped me identify my weak areas instantly. I improved my pharmacology score by 30% in just 2 weeks.", rating: 5, avatar: "SM" },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-medical/5 border border-medical/10 rounded-full mb-4">
              <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
              <span className="text-medical text-xs font-medium tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
              Trusted by <span className="gradient-text">Future Doctors</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Icons.Star key={j} />
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical/20 to-teal/20 flex items-center justify-center text-medical text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">{t.name}</p>
                    <p className="text-text-tertiary text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
