import { Link, useParams } from "react-router-dom";

interface WordData {
  word: string;
  meaning: string;
  wordtype?: string;
}

interface ExampleData {
  word: string;
  examples: string[];
}

interface Props {
  words: WordData[];
  sentences: ExampleData[];
}

export const WordDetails = ({ words, sentences }: Props) => {
  const { word } = useParams();
  const decodedWord = word ? decodeURIComponent(word) : "";

  const currentWord = words.find((item) => item.word === decodedWord);
  const currentExamples = sentences.find((item) => item.word === decodedWord);

  return (
    <section className="mx-auto max-w-3xl">
      <Link
        to="/"
        className="mb-6 inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
      >
        &lt; Back
      </Link>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Word focus
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
              {decodedWord || "Word"}
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              {currentWord?.meaning ?? "Meaning unavailable."}
            </p>
          </div>

          {currentWord?.wordtype ? (
            <span className="w-fit rounded-md bg-white px-3 py-2 text-sm font-bold uppercase tracking-wide text-amber-700 shadow-sm">
              {currentWord.wordtype}
            </span>
          ) : null}
        </div>

        <div className="pt-6">
          <h3 className="text-lg font-bold text-slate-950">Examples</h3>
          <div className="mt-4 grid gap-3">
            {currentExamples?.examples?.length ? (
              currentExamples.examples.map((example, index) => (
                <p
                  key={`${example}-${index}`}
                  className="rounded-md border border-slate-200 bg-white px-4 py-4 leading-7 text-slate-700"
                >
                  {example}
                </p>
              ))
            ) : (
              <p className="rounded-md border border-slate-200 bg-white px-4 py-4 text-slate-500">
                Example sentences are still loading.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
