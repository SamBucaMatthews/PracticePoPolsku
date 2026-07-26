import type { Noun } from "../../types/Noun";
import type { NounCases, NounDeclension } from "../../types/Cases";
import type { FlashcardData } from "./Flashcard";

type NounCase = keyof NounCases;
type NounNumber = keyof NounDeclension;

const nounCases: NounCase[] = [
  "mianownik",
  "dopełniacz",
  "celownik",
  "biernik",
  "narzędnik",
  "miejscownik",
  "wołacz",
];

export function createNounCaseCard(lemma: string, noun: Noun): FlashcardData {
  const grammaticalCase =
    nounCases[Math.floor(Math.random() * nounCases.length)];

  const number: NounNumber = Math.random() > 0.5 ? "singular" : "plural";

  if (grammaticalCase == "mianownik" && number == "singular") {
    return createNounCaseCard(lemma, noun);
  }

  return {
    front: `What is the ${grammaticalCase} (${number}) of ${lemma}?`,
    back: noun.declension[number][grammaticalCase],
  };
}

export function createNounTranslationCard(
  lemma: string,
  noun: Noun,
): FlashcardData {
  return {
    front: lemma,
    back: noun.translations?.english?.join(", ") ?? "No translation",
  };
}
