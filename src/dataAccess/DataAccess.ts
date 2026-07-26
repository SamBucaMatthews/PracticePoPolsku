import type { AdjectiveDictionary as AdjectivesDictionary } from "../../types/Adjective";
import type { NounsDictionary } from "../../types/Noun";

const CACHE_DURATION = 5 * 60 * 1000;

type CacheEntry<T> = {
  data: T | null;
  timestamp: number;
};

const caches = {
  nouns: { data: null, timestamp: 0 } as CacheEntry<NounsDictionary>,
  adjectives: { data: null, timestamp: 0 } as CacheEntry<AdjectivesDictionary>,
};

async function loadAndCache<T>(
  cache: CacheEntry<T>,
  filePath: string,
): Promise<T> {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  const res = await fetch(filePath);
  const data: T = await res.json();

  cache.data = data;
  cache.timestamp = now;

  return data;
}

export function loadNouns(): Promise<NounsDictionary> {
  return loadAndCache(caches.nouns, "/PracticePoPolsku/data/nouns.json");
}

export function loadAdjectives(): Promise<AdjectivesDictionary> {
  return loadAndCache(
    caches.adjectives,
    "/PracticePoPolsku/data/adjectives.json",
  );
}
