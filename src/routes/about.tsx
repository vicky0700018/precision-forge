import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { About } from "@/components/sections/About";
import { Team, WhyChooseUs } from "@/components/sections/Customers";
import { CtaBand } from "@/components/sections/Contact";

const title = "About Us | TechnoPerfect Engineers LLP";
const description =
  "Founded in 2026 at Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur — TechnoPerfect Engineers LLP manufactures hydraulic pump components and sub-assemblies.";

export const Route = createFileRoute("/about")({
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
        label="About"
        title="Engineering with Precision. Built for Reliability."
        intro="A precision engineering and manufacturing company serving hydraulic, automotive and industrial customers."
      />
      <About />
      <Team />
      <WhyChooseUs />
      <CtaBand />
    </SiteLayout>
  ),
});
