import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { QualityPolicy, QualityObjectives, Certifications } from "@/components/sections/Quality";
import { CtaBand } from "@/components/sections/Contact";

const title = "Quality Policy & Compliance | TechnoPerfect Engineers LLP";
const description =
  "Quality policy, measurable quality objectives and compliance status including ISO 9001:2015 (under process) and customer PPAP records.";

export const Route = createFileRoute("/quality")({
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
        label="Quality"
        title="Quality is Engineered Into Every Component"
        intro="Policy, objectives and compliance practices guiding every manufacturing batch."
      />
      <QualityPolicy />
      <QualityObjectives />
      <Certifications />
      <CtaBand />
    </SiteLayout>
  ),
});
