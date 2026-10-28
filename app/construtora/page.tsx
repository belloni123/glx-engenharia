import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { servicePages } from "../site-data";
export const metadata: Metadata = {
  title: "Construtora",
  description:
    "Construção completa com planejamento, execução e controle de qualidade.",
};
export default function Page() {
  return <ServicePage data={servicePages.construtora} index="03" />;
}
