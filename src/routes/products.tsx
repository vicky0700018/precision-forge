import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Products } from "@/components/sections/Products";
import { CtaBand } from "@/components/sections/Contact";

const title = "Products & Parts Manufacturing | TechnoPerfect Engineers LLP";
const description =
  "Hydraulic gear pump parts, tractor segment components, testing machine parts, detent blocks and custom engineered precision components.";

export const Route = createFileRoute("/products")({
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
        label="Products"
        title="Products / Parts Manufacturing"
        intro="Component categories manufactured for hydraulic, automotive and industrial customers."
      />
      <Products compact />
      <CtaBand />
    </SiteLayout>
  ),
});
