import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Customers, Team } from "@/components/sections/Customers";
import { Certifications } from "@/components/sections/Quality";
import { CtaBand } from "@/components/sections/Contact";

const title = "Our Customers | TechnoPerfect Engineers LLP";
const description =
  "Tier 1 and Tier 2 customers served by TechnoPerfect Engineers LLP across hydraulic, automotive and industrial manufacturing segments.";

export const Route = createFileRoute("/customers")({
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
        label="Customers"
        title="Trusted by Leading OEMs and Engineering Companies"
      />
      <Customers />
      <Certifications />
      <Team />
      <CtaBand />
    </SiteLayout>
  ),
});
