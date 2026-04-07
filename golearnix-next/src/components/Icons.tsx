"use client";

export const Icons = {
  Heartbeat: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M3 14H7L10 8L14 20L17 12L19 16H25" stroke="#0077b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Book: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 4H11C12.1 4 13 4.9 13 6V22C13 23.1 12.1 24 11 24H4V4Z" stroke="#0077b6" strokeWidth="1.5"/>
      <path d="M24 4H17C15.9 4 15 4.9 15 6V22C15 23.1 15.9 24 17 24H24V4Z" stroke="#2ec4b6" strokeWidth="1.5"/>
    </svg>
  ),
  Timer: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="15" r="10" stroke="#0077b6" strokeWidth="1.5"/>
      <path d="M14 9V15L18 17" stroke="#2ec4b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="3" x2="16" y2="3" stroke="#0077b6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Chart: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="16" width="5" height="8" rx="1" stroke="#0077b6" strokeWidth="1.5"/>
      <rect x="11.5" y="10" width="5" height="14" rx="1" stroke="#0077b6" strokeWidth="1.5"/>
      <rect x="20" y="4" width="5" height="20" rx="1" stroke="#2ec4b6" strokeWidth="1.5"/>
    </svg>
  ),
  Clipboard: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="5" width="18" height="20" rx="2" stroke="#0077b6" strokeWidth="1.5"/>
      <rect x="10" y="2" width="8" height="5" rx="1" stroke="#2ec4b6" strokeWidth="1.5"/>
      <line x1="9" y1="12" x2="19" y2="12" stroke="#2ec4b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="16" x2="16" y2="16" stroke="#2ec4b6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Lightning: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M15 3L5 15H13L11 25L23 11H15L15 3Z" stroke="#0077b6" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  Shield: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L24 7V14C24 20 19 25 14 27C9 25 4 20 4 14V7L14 3Z" stroke="#0077b6" strokeWidth="1.5"/>
      <path d="M10 14L13 17L18 11" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Users: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="4" stroke="#0077b6" strokeWidth="1.5"/>
      <path d="M3 23C3 18 6 15 10 15C14 15 17 18 17 23" stroke="#0077b6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="10" r="3" stroke="#2ec4b6" strokeWidth="1.5"/>
      <path d="M18 23C18 20 19.5 17 22 16.5" stroke="#2ec4b6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Target: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="#0077b6" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="7" stroke="#2ec4b6" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="3" fill="#0077b6"/>
    </svg>
  ),
  Stethoscope: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 4V10C6 14 9 17 13 17H15C19 17 22 14 22 10V4" stroke="#0077b6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="6" cy="4" r="2" stroke="#0077b6" strokeWidth="1.5"/>
      <circle cx="22" cy="4" r="2" stroke="#0077b6" strokeWidth="1.5"/>
      <path d="M14 17V22C14 23.5 15.5 25 17 25H19" stroke="#2ec4b6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="25" r="2" stroke="#2ec4b6" strokeWidth="1.5"/>
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L9.8 5.4H16L11 9L12.8 14.6L8 11L3.2 14.6L5 9L0 5.4H6.2L8 0Z"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17L4 12" stroke="#0077b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Zap: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M9 2L3 9H8L7 14L13 7H8L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 3L17 10L6 17V3Z"/>
    </svg>
  ),
};
