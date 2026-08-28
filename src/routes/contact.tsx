import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Contact, CtaBand } from "@/components/sections/Contact";

const title = "Contact Us | TechnoPerfect Engineers LLP";
const description =
  "Contact TechnoPerfect Engineers LLP, Plot No. 23/24, Sector A, Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur, Maharashtra - 416146. Phone 9764376881.";

export const Route = createFileRoute("/contact")({
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
        label="Contact"
        title="Send Your Requirement"
        intro="Share drawings, quantities or process requirements with our engineering team."
      />
      <Contact />
      <CtaBand />
    </SiteLayout>
  ),
});
