import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Portfolio, Gallery } from "@/components/sections/Portfolio";
import { CtaBand } from "@/components/sections/Contact";

const title = "Manufacturing Portfolio | TechnoPerfect Engineers LLP";
const description =
  "Demo portfolio of hydraulic, CNC, precision, automotive and industrial component manufacturing projects with process details.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        label="Portfolio"
        title="Manufacturing Portfolio"
        intro="Filter representative projects by component category and manufacturing process."
      />
      <Portfolio />
      <Gallery />
      <CtaBand />
    </SiteLayout>
  ),
});
