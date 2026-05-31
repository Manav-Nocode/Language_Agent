import { Link } from "react-router-dom";

interface WordProps {
  name: string;
  meaning: string;
  wordtype?: string;
  index: number;
}

const Word_Module = ({ name, meaning, wordtype, index }: WordProps) => {
  return (
    <Link
      to={`/word/${encodeURIComponent(name)}`}
      className="group block rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal-50 text-sm font-bold text-teal-700">
          {String(index).padStart(2, "0")}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="truncate text-2xl font-bold tracking-tight text-slate-950">
              {name}
            </h3>
            {wordtype ? (
              <span className="w-fit rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                {wordtype}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-base leading-7 text-slate-600">{meaning}</p>
        </div>

        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-400 transition group-hover:border-teal-300 group-hover:text-teal-700 sm:flex">
          &gt;
        </div>
      </div>
    </Link>
  );
};

export default Word_Module;
