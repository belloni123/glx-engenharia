import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { servicePages } from "../site-data";
export const metadata: Metadata = {
  title: "Gestão de obras",
  description:
    "Gestão técnica de prazo, custo, suprimentos e qualidade para sua obra.",
};
export default function Page() {
  return <ServicePage data={servicePages.gestao} index="04" />;
}
