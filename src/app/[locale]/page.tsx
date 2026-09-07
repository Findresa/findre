// Coming Soon mode — the full home page (Hero / ValueProps / FeaturedProperties / …) is
// intentionally disabled while the site is still under construction. All those components
// still exist in the repo. To relaunch, revert the commit that added the ComingSoon wiring.
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "@/components/ComingSoon";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ComingSoon />;
}
