export const PORTFOLIO_EXCERPT_LIMIT = 200;

export function caseExcerpt(description: string): string {
  const text = description.trim();
  if (text.length <= PORTFOLIO_EXCERPT_LIMIT) return text;
  const cut = text.slice(0, PORTFOLIO_EXCERPT_LIMIT - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}
