import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { servicePages } from "../site-data";
export const metadata: Metadata = {
  title: "Engenharia e projetos",
  description: "Projetos, compatibilização, laudos, ARTs e regularizações.",
};
export default function Page() {
  return <ServicePage data={servicePages.engenharia} index="05" />;
}
