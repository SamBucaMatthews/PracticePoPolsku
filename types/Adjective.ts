import type { SingularAndPluralCases } from "./Cases";

export type Adjective = {
  adverb: string;
  cases: SingularAndPluralCases<Adjective>;
};
