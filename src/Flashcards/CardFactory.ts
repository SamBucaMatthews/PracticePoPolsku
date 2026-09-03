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

export function createNounCaseCard(noun: Noun): FlashcardData {
  const lemma = noun.declension.singular.mianownik;
  const grammaticalCase =
    nounCases[Math.floor(Math.random() * nounCases.length)];

  const number: NounNumber = Math.random() > 0.5 ? "singular" : "plural";

  if (grammaticalCase == "mianownik" && number == "singular") {
    return createNounCaseCard(noun);
  }

  return {
    front: `What is the ${grammaticalCase} (${number}) of ${lemma}?`,
    back: noun.declension[number][grammaticalCase],
  };
}

export function createNounTranslationCard(noun: Noun): FlashcardData {
  return {
    front: noun.declension.singular.mianownik,
    back: noun.translations?.english?.join(", ") ?? "No translation",
  };
}

export function createMianownikSingularPluralCard(noun: Noun): FlashcardData {
  const back: NounNumber = Math.random() > 0.5 ? "singular" : "plural";
  const front = back === "plural" ? "singular" : "plural";

  return {
    front: `What is the ${back} of ${noun.declension[front].mianownik}?`,
    back: noun.declension[back].mianownik,
  };
}
