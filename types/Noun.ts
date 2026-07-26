import type { NounDeclension } from "./Cases";
import type { Gender } from "./Gender";
import type { Translations } from "./Translation";

export interface Noun {
  gender: Gender;
  declension: NounDeclension;
  translations?: Translations;
}

export type NounsDictionary = Record<string, Noun>;
