import type { NounsDictionary } from "../../types/Noun";

const CACHE_DURATION = 5 * 60 * 1000;
let cachedNouns: NounsDictionary | null = null;
let cacheTimestamp = 0;

export async function loadNouns(): Promise<NounsDictionary> {
  const now = Date.now();

  if (cachedNouns && now - cacheTimestamp < CACHE_DURATION) {
    return cachedNouns;
  }

  const res = await fetch("/PracticePoPolsku/data/nouns.json");
  const data: NounsDictionary = await res.json();

  cachedNouns = data;
  cacheTimestamp = now;

  return data;
}

export async function loadNoun(lemma: string) {
  return (await loadNouns())[lemma];
}

export async function loadRandomNoun() {
  const nouns = await loadNouns();
  const keys = Object.keys(nouns);
  const randomIndex = Math.floor(Math.random() * keys.length);

  return nouns[keys[randomIndex]];
}
