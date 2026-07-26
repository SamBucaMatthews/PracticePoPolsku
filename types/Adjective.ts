import type { AdjectiveDeclension } from "./Cases";

export type Adjective = {
  adverb: string;
  cases: AdjectiveDeclension;
};

export type AdjectiveDictionary = Record<string, Adjective>;
