"use client";

import Reveal from "./Reveal";

export default function Subjects() {
  const subjects = [
    { name: "Anatomy", questions: "1,200+", color: "from-blue-500 to-blue-600" },
    { name: "Physiology", questions: "950+", color: "from-teal-500 to-teal-600" },
    { name: "Biochemistry", questions: "800+", color: "from-purple-500 to-purple-600" },
    { name: "Pharmacology", questions: "1,100+", color: "from-green-500 to-green-600" },
    { name: "Pathology", questions: "1,000+", color: "from-red-500 to-red-600" },
    { name: "Medicine", questions: "1,500+", color: "from-indigo-500 to-indigo-600" },
    { name: "Surgery", questions: "900+", color: "from-orange-500 to-orange-600" },
    { name: "OB/GYN", questions: "750+", color: "from-pink-500 to-pink-600" },
    { name: "Pediatrics", questions: "650+", color: "from-cyan-500 to-cyan-600" },
    { name: "Psychiatry", questions: "500+", color: "from-yellow-500 to-yellow-600" },
    { name: "Community Med", questions: "450+", color: "from-emerald-500 to-emerald-600" },
    { name: "Forensic Med", questions: "350+", color: "from-slate-500 to-slate-600" },
  ];

  return (
    <section id="subjects" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/5 border border-teal/10 rounded-full mb-4">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal text-xs font-medium tracking-wider uppercase">Content Library</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
              Every Subject, <span className="gradient-text">Every Topic</span>
            </h2>
            <p className="text-text-tertiary max-w-xl mx-auto">
              Complete coverage across all 5 years of MBBS with thousands of high-yield questions.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="glass-card rounded-xl p-5 h-full group cursor-pointer">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} mb-3 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform`}>
                  {s.name[0]}
                </div>
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">{s.name}</h3>
                <p className="text-text-tertiary text-xs">{s.questions} questions</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
