import type { NounCases } from "../types/Cases";
import type { Noun } from "../types/Noun";

export type PrepositionCaseRule = {
  static?: keyof NounCases;
  motion?: keyof NounCases;
};

export const PrepositionCaseMap: Record<string, PrepositionCaseRule> = {
  w: { static: "locative", motion: "accusative" },
  na: { static: "locative", motion: "accusative" },
  pod: { static: "instrumental", motion: "accusative" },
  nad: { static: "instrumental", motion: "accusative" },
  przed: { static: "instrumental", motion: "accusative" },
  za: { static: "instrumental", motion: "accusative" },
  między: { static: "instrumental", motion: "accusative" },
  do: { motion: "genitive" },
  od: { motion: "genitive" },
  z: { motion: "genitive", static: "instrumental" },
  o: { static: "locative" },
  przy: { static: "locative" },
  po: { static: "locative" },
  dla: { motion: "genitive" },
};

export type PrepositionForm = {
  preposition: string;
  singular: { static?: string; motion?: string };
  plural: { static?: string; motion?: string };
};

export function getPrepositionsForNoun(noun: Noun): PrepositionForm[] {
  return Object.entries(PrepositionCaseMap)
    .sort((a, b) => a[0].localeCompare(b[0], "pl"))
    .map(([prep, rule]) => ({
      preposition: prep,
      singular: {
        static: rule.static ? noun.cases.singular[rule.static] : undefined,
        motion: rule.motion ? noun.cases.singular[rule.motion] : undefined,
      },
      plural: {
        static: rule.static ? noun.cases.plural[rule.static] : undefined,
        motion: rule.motion ? noun.cases.plural[rule.motion] : undefined,
      },
    }));
}
