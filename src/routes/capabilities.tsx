import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Capabilities } from "@/components/sections/Capabilities";
import { Instruments } from "@/components/sections/Facilities";
import { CtaBand } from "@/components/sections/Contact";

const title = "Engineering Capabilities | TechnoPerfect Engineers LLP";
const description =
  "CNC turning, vertical machining, surface grinding, hydraulic pump components, sub-assemblies and precision inspection capabilities at Yadrav, Kolhapur.";

export const Route = createFileRoute("/capabilities")({
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
        label="Capabilities"
        title="Our Engineering Capabilities"
        intro="Machining, assembly and inspection capabilities under one roof."
      />
      <Capabilities />
      <Instruments />
      <CtaBand />
    </SiteLayout>
  ),
});
