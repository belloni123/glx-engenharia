import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Experience } from "./components/experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glxengenharia.com.br"),
  title: {
    default: "GLX Engenharia | Projetos, gestão e construção",
    template: "%s | GLX Engenharia",
  },
  description:
    "Projetos, gestão e execução de obras em Assis e região, com acompanhamento técnico e informação para o cliente decidir.",
  icons: { icon: "/brand/glx-mark.svg" },
  openGraph: {
    title: "GLX Engenharia | Projetos, gestão e construção",
    description:
      "Uma equipe para organizar projetos, decisões e execução do início à entrega.",
    type: "website",
    locale: "pt_BR",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "GLX Engenharia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLX Engenharia",
    description: "Projetos, gestão e execução de obras em Assis e região.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Experience>{children}</Experience>
      </body>
    </html>
  );
}
