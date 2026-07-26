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
  mianownik: string;
  dopełniacz: string;
  celownik: string;
  biernik: string;
  narzędnik: string;
  miejscownik: string;
  wołacz: string;
};

export type AdjectiveSingularCases = {
  mianownik: string;
  dopełniacz: string;
  celownik: string;
  biernik: MasculineAnimateInanimateSplit;
  narzędnik: string;
  miejscownik: string;
  wołacz: string;
};

export type AdjectivePluralCases = {
  mianownik: MasculinePersonalSplit;
  dopełniacz: string;
  celownik: string;
  biernik: MasculinePersonalSplit;
  narzędnik: string;
  miejscownik: string;
  wołacz: MasculinePersonalSplit;
};
