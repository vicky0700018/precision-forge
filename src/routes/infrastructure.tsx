import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Facilities, Instruments } from "@/components/sections/Facilities";
import { Gallery } from "@/components/sections/Portfolio";
import { CtaBand } from "@/components/sections/Contact";

const title = "Manufacturing Infrastructure | TechnoPerfect Engineers LLP";
const description =
  "CNC turning centres, vertical machining centres, surface grinders and measuring instruments installed at our Yadrav, Kolhapur plant.";

export const Route = createFileRoute("/infrastructure")({
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
        label="Infrastructure"
        title="Manufacturing Facilities & Instruments"
        intro="Machining and inspection infrastructure supporting consistent component quality."
      />
      <Facilities />
      <Instruments />
      <Gallery />
      <CtaBand />
    </SiteLayout>
  ),
});
