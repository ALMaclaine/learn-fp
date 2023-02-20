import parseUrl from 'parse-url';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as A from 'fp-ts/Array';

const isDotCom = (url: string): boolean => {
  try {
    const parsed = parseUrl(url);
    const resource = parsed.resource;
    const parts = resource.split('.');
    const n = parts.length;

    if (n > 1) {
      const tld = parts[n - 1];
      return tld === 'com';
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

type ParsedUrl = ReturnType<typeof parseUrl>;

const tryParseingUrl = (url: string): O.Option<ParsedUrl> => {
  return O.tryCatch(() => parseUrl(url));
};

const getTld = (resource: string): O.Option<string> => {
  return pipe(resource, (r) => r.split('.'), A.last);
};

const isDotComFP = (url: string): boolean => {
  return pipe(
    url,
    tryParseingUrl,
    O.map((p) => p.resource),
    O.chain(getTld),
    O.exists((tld) => tld === 'com')
  );
};

export { isDotCom, isDotComFP };
