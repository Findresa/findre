// Standalone bilingual "Coming Soon" landing.
// Renders full-viewport dark gradient with logo, headline, tagline, WhatsApp CTA.
// When the site is ready to launch, revert the commit that added this + wired it into page.tsx / layout.tsx.
import Image from "next/image";

const WHATSAPP_NUMBER = "966551817337"; // FindRE business line
const WHATSAPP_MSG_AR = encodeURIComponent("مرحباً، أود الاستفسار عن FindRE");

export function ComingSoon() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_AR}`;

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background:
          "radial-gradient(ellipse at top, #202a44 0%, #0d0f1a 60%, #06070d 100%)",
        color: "#e2e8f0",
        fontFamily: "'Tajawal', 'Montserrat', system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      {/* FindRE mark — gold house-with-magnifier symbol, transparent PNG. Aspect ratio 1406:1625 preserved. */}
      <div style={{ marginBottom: 40, display: "flex", justifyContent: "center", width: "100%" }}>
        <Image
          src="/brand/comingsoon-mark.png"
          alt="FindRE"
          width={1406}
          height={1625}
          priority
          style={{ width: 140, height: "auto", display: "block" }}
        />
      </div>

      {/* Arabic headline */}
      <h1
        style={{
          fontSize: "clamp(48px, 10vw, 88px)",
          fontWeight: 800,
          margin: 0,
          color: "#ac9055",
          letterSpacing: "-1px",
          lineHeight: 1.05,
        }}
      >
        قريباً
      </h1>

      {/* English subheading */}
      <div
        style={{
          fontSize: "clamp(20px, 3.5vw, 28px)",
          fontWeight: 500,
          color: "#94a3b8",
          marginTop: 12,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Coming Soon
      </div>

      {/* Divider */}
      <div
        style={{
          width: 60,
          height: 2,
          background: "#ac9055",
          margin: "28px auto",
          opacity: 0.6,
        }}
      />

      {/* Bilingual tagline */}
      <p
        style={{
          fontSize: "clamp(15px, 2.5vw, 18px)",
          color: "#cbd5e1",
          maxWidth: 520,
          lineHeight: 1.7,
          margin: "0 0 8px 0",
        }}
      >
        منصة عقارية في الرياض
      </p>
      <p
        style={{
          fontSize: "clamp(13px, 2vw, 15px)",
          color: "#64748b",
          maxWidth: 520,
          lineHeight: 1.6,
          margin: 0,
          direction: "ltr",
        }}
      >
        Real estate · Riyadh
      </p>

      {/* WhatsApp CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 40,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 28px",
          borderRadius: 999,
          background: "#25d366",
          color: "#0d0f1a",
          fontSize: 16,
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(37,211,102,0.28)",
          fontFamily: "'Tajawal', system-ui, sans-serif",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.4 0 .04 5.36.04 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a12.02 12.02 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99a11.9 11.9 0 0 0-3.51-8.4zM12.03 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.68.96.98-3.58-.23-.37a9.83 9.83 0 0 1-1.51-5.23c0-5.44 4.43-9.87 9.87-9.87 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5a9.14 9.14 0 0 1-1.69-2.1c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.35.19 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
        <span>تواصل معنا · WhatsApp</span>
      </a>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: 60,
          fontSize: 12,
          color: "#475569",
          direction: "ltr",
        }}
      >
        © {new Date().getFullYear()} FindRE · مؤسسة فايند آر إي للعقارات
      </div>
    </main>
  );
}
