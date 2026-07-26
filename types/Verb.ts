export type Aspect = "perfective" | "imperfective";

export type PresentConjugation = {
  singular: {
    first: string;
    second: string;
    third: string;
  };
  plural: {
    first: string;
    second: string;
    third: string;
  };
};

export type PastSingularMFConjugation = {
  masculine: string;
  feminine: string;
};

export type PastSingular3rdConjugation = {
  masculine: string;
  feminine: string;
  neuter: string;
};

export type PastPluralConjugation = {
  masculinePersonal: string;
  nonMasculinePersonal: string;
};

export type PastConjugation = {
  singular: {
    first: PastSingularMFConjugation;
    second: PastSingularMFConjugation;
    third: PastSingular3rdConjugation;
  };
  plural: {
    first: PastPluralConjugation;
    second: PastPluralConjugation;
    third: PastPluralConjugation;
  };
};

export type SimpleFuture = {
  type: "simple";
  forms: PresentConjugation;
};

export type CompoundFuture = {
  type: "compound";
  auxiliary: PresentConjugation;
  infinitive: string;
};

export type FutureConjugation<A extends Aspect> = A extends "imperfective"
  ? CompoundFuture
  : SimpleFuture;

export type Verb<A extends Aspect> = {
  lemma: string;
  aspect: A;
  conjugation: {
    present?: PresentConjugation;
    past: PastConjugation;
    future: FutureConjugation<A>;
  };
};
