import type { Noun } from "../../types/Noun";
import type { FlashcardData } from "./Flashcard";

export function createNounTranslationCard(
  lemma: string,
  noun: Noun,
): FlashcardData {
  return {
    front: lemma,
    back: noun.translations?.english?.join(", ") ?? "No translation",
  };
}
