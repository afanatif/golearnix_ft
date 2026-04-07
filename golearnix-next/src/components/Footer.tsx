"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-12 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <a href="#hero" className="font-heading font-bold text-xl">
              <span className="text-medical">Go</span>
              <span className="text-teal">Learnix</span>
            </a>
            <p className="text-text-tertiary text-sm mt-3 leading-relaxed">
              The most comprehensive MBBS practice platform. Master your exams with confidence.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Features", "Subjects", "Pricing", "Demo"] },
            { title: "Support", links: ["Help Center", "Contact Us", "Community", "Feedback"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-heading text-sm font-semibold text-text-primary mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-tertiary text-sm hover:text-medical transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            &copy; {new Date().getFullYear()} GoLearnix Medical Editorial Excellence. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-text-tertiary text-xs hover:text-medical transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
