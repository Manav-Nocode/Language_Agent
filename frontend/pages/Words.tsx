import { Link } from "react-router-dom";

interface WordData {
  word: string;
  meaning: string;
  wordtype?: string;
}

interface Props {
  words: WordData[];
}

const Words = ({ words }: Props) => {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-950">Word library</h2>
        <p className="mt-1 text-sm text-slate-500">
          A quick scan view for the current lesson set.
        </p>
      </div>

      {words.length ? (
        <div className="overflow-hidden rounded-lg border border-slate-200">
          {words.map((item, index) => (
            <Link
              key={`${item.word}-${index}`}
              to={`/word/${encodeURIComponent(item.word)}`}
              className="grid gap-2 border-b border-slate-200 bg-white px-4 py-4 transition last:border-b-0 hover:bg-teal-50 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center"
            >
              <span className="font-bold text-slate-950">{item.word}</span>
              <span className="text-sm leading-6 text-slate-600">
                {item.meaning}
              </span>
              <span className="text-sm font-semibold text-teal-700">
                Study
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-10 text-center">
          <p className="font-semibold text-slate-700">No library words yet.</p>
          <p className="mt-1 text-sm text-slate-500">
            Load a lesson from the home screen first.
          </p>
        </div>
      )}
    </section>
  );
};

export default Words;
