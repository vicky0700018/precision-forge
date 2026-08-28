import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Facilities, Instruments } from "@/components/sections/Facilities";
import { Products } from "@/components/sections/Products";
import { QualityPolicy, QualityObjectives, Certifications } from "@/components/sections/Quality";
import { Customers, Team, WhyChooseUs } from "@/components/sections/Customers";
import { Portfolio, Gallery } from "@/components/sections/Portfolio";
import { CtaBand, Contact } from "@/components/sections/Contact";

const title = "TechnoPerfect Engineers LLP | Precision Engineering & Manufacturing";
const description =
  "TechnoPerfect Engineers LLP specializes in precision machining, hydraulic pump components, sub-assemblies and industrial engineering solutions from Yadrav, Kolhapur, Maharashtra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Capabilities />
      <Facilities />
      <Instruments />
      <Products />
      <QualityPolicy />
      <QualityObjectives />
      <Certifications />
      <Customers />
      <Team />
      <WhyChooseUs />
      <Portfolio />
      <Gallery />
      <CtaBand />
      <Contact />
    </SiteLayout>
  );
}
