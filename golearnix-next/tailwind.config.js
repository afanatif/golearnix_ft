/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#fafafa", secondary: "#f5f5f7", tertiary: "#e8e8ed" },
        text: { primary: "#1d1d1f", secondary: "#6e6e73", tertiary: "#86868b" },
        medical: { DEFAULT: "#0077b6", light: "#00b4d8", dark: "#023e8a", accent: "#48cae4" },
        teal: { DEFAULT: "#2ec4b6", light: "#5dd9cd", dark: "#1a9e92" },
        success: { DEFAULT: "#34c759", light: "#5dd879" },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.04)",
        card: "0 4px 24px rgba(0,0,0,0.06)",
        elevated: "0 12px 40px rgba(0,0,0,0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
