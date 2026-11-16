import { SITE } from "../lib/site";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
        "Hi DevByLand! I’d like to talk about a project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.8A8.8 8.8 0 1 1 21 11.5Z" />
        <path d="M8.5 9.5c.5 2.3 1.8 3.7 4 4.5" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
