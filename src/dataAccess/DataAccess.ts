import type { NounsDictionary } from "../../types/Noun";

export async function loadNouns(): Promise<NounsDictionary> {
  const res = await fetch("/PracticePoPolsku/data/nouns.json");
  return await res.json();
}
