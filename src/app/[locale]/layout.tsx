import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
// Coming Soon mode: Header/Footer/WhatsAppFAB imports intentionally left in place but unused,
// so relaunching the real site only requires reverting one commit (re-adds them below).
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  // Coming Soon mode metadata — customers who share the link on WhatsApp/etc. see this preview.
  // Revert this block along with page.tsx / layout body / middleware when relaunching.
  title: "FindRE — قريباً · Coming Soon",
  description:
    "منصة عقارية بوتيك في شمال الرياض · Boutique real estate in Northern Riyadh — launching soon.",
  icons: { icon: "/brand/favicon.svg" },
};

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "ar" | "en")) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${montserrat.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-white" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {/* Coming Soon mode: Header/Footer/WhatsAppFAB removed so the landing renders full-viewport.
              Revert this commit to restore the real site chrome. */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
