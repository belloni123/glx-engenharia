import type { Metadata } from "next";
import { FinalCta, PageShell } from "../components/sections";
import { PortfolioGrid } from "./portfolio-grid";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça os espaços e obras do portfólio da GLX Engenharia.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <section className="portfolio-intro section-dark">
        <p className="kicker">Portfólio GLX</p>
        <h1>O trabalho ganha forma.</h1>
        <p>
          Da estrutura ao detalhe, cada espaço conta uma parte da nossa
          história.
        </p>
        <a href="#cases" className="text-button">
          Explore os trabalhos ↓
        </a>
      </section>
      <PortfolioGrid />
      <FinalCta title="Vamos dar forma ao seu próximo projeto?" />
    </PageShell>
  );
}
