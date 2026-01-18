import type { Cases } from "./Cases";
import type { Gender } from "./Gender";
import type { Translation } from "./Translation";

export interface NounEntry {
    gender: Gender;
    cases: Cases;
    translations?: Translation[]
}

export type NounsDictionary = Record<string, NounEntry>;

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
