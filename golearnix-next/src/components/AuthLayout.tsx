"use client";

import ParticlesMedical from "@/components/ParticlesMedical";
import { Icons } from "@/components/Icons";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  quote: string;
  linkText: string;
  linkHref: string;
  linkLabel: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  quote,
  linkText,
  linkHref,
  linkLabel,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row relative overflow-hidden grid-bg">
      <div className="orb-medical w-[500px] h-[500px] bg-blue-200/20 top-[5%] left-[10%] animate-float" />
      <div className="orb-medical w-[400px] h-[400px] bg-teal-200/20 bottom-[10%] right-[5%] animate-float-delayed" />
      <ParticlesMedical />

      {/* Left panel - branding */}
      <section className="hidden md:flex md:w-[55%] relative flex-col justify-center items-center p-12 overflow-hidden">
        <div className="absolute top-20 left-20 text-medical/10 select-none">
          <svg width="192" height="192" viewBox="0 0 28 28" fill="none">
            <path d="M6 4V10C6 14 9 17 13 17H15C19 17 22 14 22 10V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="22" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 17V22C14 23.5 15.5 25 17 25H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="20" cy="25" r="2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 text-teal/10 select-none rotate-12">
          <svg width="160" height="160" viewBox="0 0 28 28" fill="none">
            <path d="M4 4H11C12.1 4 13 4.9 13 6V22C13 23.1 12.1 24 11 24H4V4Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M24 4H17C15.9 4 15 4.9 15 6V22C15 23.1 15.9 24 17 24H24V4Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-lg">
          <div className="font-heading font-bold text-4xl lg:text-5xl tracking-tight mb-6">
            <span className="text-medical">Go</span>
            <span className="text-teal">Learnix</span>
          </div>
          <p className="text-xl lg:text-2xl font-medium text-[#31447b] leading-relaxed">
            {quote}
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <div className="h-1 w-12 bg-medical/20 rounded-full" />
            <div className="h-1 w-12 bg-medical rounded-full" />
            <div className="h-1 w-12 bg-medical/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Right panel - form */}
      <section className="w-full md:w-[45%] flex flex-col justify-center items-center px-6 py-12 lg:px-24 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="md:hidden flex flex-col items-center mb-8">
            <div className="font-heading font-bold text-3xl tracking-tight">
              <span className="text-medical">Go</span>
              <span className="text-teal">Learnix</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">
              {title}
            </h2>
            <p className="text-text-secondary font-medium">{subtitle}</p>
          </div>

          {children}

          <p className="text-center text-text-secondary font-medium pt-6">
            {linkText}{" "}
            <a
              href={linkHref}
              className="text-medical font-bold hover:underline underline-offset-4 ml-1"
            >
              {linkLabel}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
