import * as RTE from 'fp-ts/ReaderTaskEither';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';

interface Logger {
  log: (message: string, value: unknown) => void;
}

function logReaderTaskEither<A>(
  message: string,
  value: A
): RTE.ReaderTaskEither<Logger, never, A> {
  return (logger: Logger) => {
    logger.log(message, value);
    return TE.right(value);
  };
}

// Your async TaskEither functions
const asyncFn1: TE.TaskEither<Error, number> = TE.right(42);
const asyncFn2: (n: number) => TE.TaskEither<Error, string> = (n) =>
  TE.right(`Result: ${n}`);

const pipeline = pipe(
  RTE.fromTaskEither(asyncFn1),
  RTE.chain((value) => logReaderTaskEither('Initial value:', value)),
  RTE.chain(asyncFn2),
  RTE.chain((value) => logReaderTaskEither('Final value:', value))
);

// Provide the Logger instance
const consoleLogger: Logger = {
  log: (message: string, value: unknown) => console.log(message, value),
};

// Execute the pipeline
RTE.run(pipeline, consoleLogger)().catch((error) =>
  console.error('Error:', error.message)
);
