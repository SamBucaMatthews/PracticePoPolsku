export type Cases = {
    nominative: string;   // Mianownik
    genitive: string;     // Dopełniacz
    dative: string;       // Celownik
    accusative: string;   // Biernik
    instrumental: string; // Narzędnik
    locative: string;     // Miejscownik
    vocative: string;     // Wołacz
};

export type Noun = {
    word: string;
    cases: Cases;
};

export const PREPOSITION_CASE_MAP: Record<string, keyof Cases> = {
    w: "locative",
    na: "locative",
    pod: "instrumental",
    do: "genitive",
    z: "instrumental",
    o: "locative",
    przy: "locative",
    dla: "genitive",
    od: "genitive",
    przed: "instrumental",
    za: "instrumental",
    między: "instrumental",
    po: "locative",
};
