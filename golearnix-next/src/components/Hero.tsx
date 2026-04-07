"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { Icons } from "./Icons";
import ParticlesMedical from "./ParticlesMedical";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="orb-medical w-[500px] h-[500px] bg-blue-200/30 top-[5%] left-[10%] animate-float" />
      <div className="orb-medical w-[400px] h-[400px] bg-teal-200/30 bottom-[10%] right-[5%] animate-float-delayed" />
      <div className="orb-medical w-[300px] h-[300px] bg-cyan-200/20 top-[50%] right-[25%] animate-float-slow" />

      <ParticlesMedical />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-medical/[0.04] rounded-full animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-teal/[0.05] rounded-full animate-spin-reverse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical/5 border border-medical/10 rounded-full mb-8">
                <span className="animate-heartbeat text-red-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span className="text-medical text-sm font-medium">
                  MBBS Practice Platform
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-8 text-text-primary">
                Master MBBS Exams
                <br className="hidden lg:block" />
                <span className="gradient-text"> with Confidence</span>
              </h1>
            </Reveal>

            <Reveal delay={250}>
              <p className="text-text-primary text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 mb-4">
                Practice 10,000+ MCQs organized by Year, Block, Module, Subject
                & Topic
              </p>
            </Reveal>

            <Reveal delay={350}>
              <p className="text-text-secondary text-base max-w-lg mx-auto lg:mx-0 mb-10">
                Timed exams, instant feedback, and detailed analytics —
                everything you need to ace your medical exams.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="/signup"
                  className="btn-primary px-8 py-3.5 text-white font-medium rounded-full inline-flex items-center justify-center gap-2 text-base"
                >
                  Start Practicing <Icons.Arrow />
                </a>
                <a
                  href="#features"
                  className="btn-secondary px-8 py-3.5 text-text-primary font-medium rounded-full inline-flex items-center justify-center gap-2 text-base"
                >
                  <Icons.Play /> View Demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={550}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  {[
                    "./student_1.png",
                    "./student_2.png",
                    "./student_3.png",
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:scale-105"
                    >
                      <img
                        src={avatar}
                        alt={`Student ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-text-secondary text-sm font-medium">
                    Joined by{" "}
                    <span className="text-text-primary font-bold">2,000+</span>{" "}
                    medical students
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} direction="right">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-medical/5 rounded-[2rem] blur-3xl" />
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="./hero_3.png"
                  alt="Medical Students Illustration"
                  className="relative w-full max-w-[550px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,119,182,0.15)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
