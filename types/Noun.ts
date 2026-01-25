import type { SingularAndPluralCases } from "./Cases";
import type { Gender } from "./Gender";
import type { Translation } from "./Translation";

export interface NounEntry {
  gender: Gender;
  cases: SingularAndPluralCases<NounEntry>;
  translations?: Translation[];
}

export type NounsDictionary = Record<string, NounEntry>;
