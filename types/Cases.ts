export type NounDeclension = {
  singular: NounCases;
  plural: NounCases;
};

export type AdjectiveDeclension = {
  singular: AdjectiveSingularCases;
  plural: AdjectivePluralCases;
};

export type MasculinePersonalSplit = {
  masculinePersonal: string;
  nonMasculinePersonal: string;
};

export type MasculineAnimateInanimateSplit = {
  animate: string;
  inanimate: string;
};

export type NounCases = {
  nominative: string; // Mianownik
  genitive: string; // Dopełniacz
  dative: string; // Celownik
  accusative: string; // Biernik
  instrumental: string; // Narzędnik
  locative: string; // Miejscownik
  vocative: string; // Wołacz
};

export type AdjectiveSingularCases = {
  nominative: string; // Mianownik
  genitive: string; // Dopełniacz
  dative: string; // Celownik
  accusative: MasculineAnimateInanimateSplit; // Biernik
  instrumental: string; // Narzędnik
  locative: string; // Miejscownik
  vocative: string; // Wołacz
};

export type AdjectivePluralCases = {
  nominative: MasculinePersonalSplit; // Mianownik
  genitive: string; // Dopełniacz
  dative: string; // Celownik
  accusative: MasculinePersonalSplit; // Biernik
  instrumental: string; // Narzędnik
  locative: string; // Miejscownik
  vocative: MasculinePersonalSplit; // Wołacz
};
