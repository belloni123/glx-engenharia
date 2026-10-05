import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://glxengenharia.com.br';
  const routes = ['', '/a-glx', '/construtora', '/gestao-de-obras', '/engenharia', '/orcamento', '/trabalhe-conosco', '/seja-parceiro', '/privacidade', '/termos'];
  return routes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date('2026-09-01'), changeFrequency: index === 0 ? 'weekly' : 'monthly', priority: index === 0 ? 1 : index < 8 ? .8 : .3 }));
}
