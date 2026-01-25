import type { SingularAndPluralCases } from "./Cases";
import type { Gender } from "./Gender";
import type { Translation } from "./Translation";

export interface Noun {
  gender: Gender;
  cases: SingularAndPluralCases<Noun>;
  translations?: Translation[];
}

export type NounsDictionary = Record<string, Noun>;
