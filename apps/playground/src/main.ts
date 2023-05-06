import { tap, succeed, chain } from '@effect-ts/core/Effect';
import * as T from '@effect-ts/core/Effect';
import { makeRef } from '@effect-ts/core/Effect/Ref';
import { pipe } from '@effect-ts/core/Function';
import { tryCatch } from '@effect-ts/core/Effect/Utils';

export interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export const cache = new Map<string, CacheItem<unknown>>();

export function fetchFromNetwork<T>(url: string) {
  return tryCatch(
    () => fetch(url).then((res) => res.json() as Promise<T>),
    (e) => new Error(`Failed to fetch ${url}: ${String(e)}`)
  );
}

// Add type parameter `K` for the key type
export function getFromCache<T>(url: string, maxAge = 5 * 60 * 1000) {
  // Use `Record<K, CacheItem<T>>` to define the type of the cache map
  return pipe(
    makeRef<CacheItem<T> | undefined>(
      cache.get(url) as CacheItem<T> | undefined
    ),
    chain((ref) =>
      pipe(
        ref.get,
        chain((cachedItem) =>
          cachedItem && Date.now() - cachedItem.timestamp < maxAge
            ? succeed(cachedItem.data)
            : pipe(
                fetchFromNetwork<T>(url),
                tap((data) => {
                  ref.set({
                    ...cachedItem,
                    data,
                    timestamp: Date.now(),
                  });
                  // Update cache map with the new data and timestamp
                  cache.set(url, { data, timestamp: Date.now() });
                })
              )
        )
      )
    )
  );
}

// const main = T.gen(function* (_) {
//   const url = 'https://jsonplaceholder.typicode.com/todos/1';
//
//   const result = yield* getFromCache(url);
//   console.log('First fetch result:', result);
//
//   yield* T.sleep(2000); // 2 seconds delay
//
//   const result2 = yield* getFromCache(url);
//   console.log('Second fetch result:', result2);
// });
//
// T.run(main);
