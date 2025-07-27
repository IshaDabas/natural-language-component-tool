import { componentUI } from "../objects";

export function filterComponents(search) {
  const stopWords = new Set([
    "i",
    "a",
    "an",
    "the",
    "is",
    "for",
    "my",
    "to",
    "of",
    "in",
    "on",
    "with",
    "and",
    "want",
    "need",
  ]);

  const searchWords = search
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word && !stopWords.has(word));

  if (searchWords.length === 0) return [];

  return componentUI.filter((component) => {
    const name = component.name.toLowerCase();
    const keywords = (component.keywords || []).map((k) => k.toLowerCase());

    // Match if ANY search word is found in name or keywords
    return searchWords.some(
      (word) => name.includes(word) || keywords.some((k) => k.includes(word))
    );
  });
}
