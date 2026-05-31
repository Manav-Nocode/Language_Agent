import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Word_Module from "../Components/Word_Module";
import { WordDetails } from "../Components/WordDetails";
import Words from "../pages/Words";

interface WordData {
  word: string;
  meaning: string;
  wordtype?: string;
}

interface ExampleData {
  word: string;
  examples: string[];
}

const asArray = <T,>(value: T[] | T | undefined | null): T[] => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

const App = () => {
  const [words, setWords] = useState<WordData[]>([]);
  const [sentences, setSentences] = useState<ExampleData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLesson() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("http://localhost:4000/api/words");

        if (!response.ok) {
          throw new Error("Could not load today's lesson.");
        }

        const data = await response.json();
        setWords(asArray<WordData>(data.lesson?.words));
        setSentences(asArray<ExampleData>(data.lesson?.examples));
      } catch (err) {
        setWords([]);
        setSentences([]);
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    loadLesson();
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex flex-1 items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition",
      isActive
        ? "bg-slate-950 text-white shadow-sm"
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-950",
    ].join(" ");

  return (
    <div className="min-h-screen bg-[#f6f2ea] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:py-6">
        <header className="flex flex-col gap-5 border-b border-slate-200 bg-white px-5 py-5 shadow-sm sm:rounded-t-lg sm:px-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              German Sprint
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Today's vocabulary
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-bold">{words.length}</p>
              <p className="text-xs font-medium text-slate-500">words</p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-bold">{sentences.length}</p>
              <p className="text-xs font-medium text-slate-500">sets</p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-bold">A1</p>
              <p className="text-xs font-medium text-slate-500">level</p>
            </div>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto bg-white px-5 py-6 shadow-sm sm:px-7">
          <Routes>
            <Route
              path="/"
              element={
                <section className="mx-auto max-w-4xl">
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-950">
                        Learn the set
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Tap a word to study example sentences and usage.
                      </p>
                    </div>
                    <span className="w-fit rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                      Fresh lesson
                    </span>
                  </div>

                  {error ? (
                    <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-amber-800">
                      {error}
                    </div>
                  ) : null}

                  {isLoading ? (
                    <div className="grid gap-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="h-28 animate-pulse rounded-lg bg-slate-100"
                        />
                      ))}
                    </div>
                  ) : words.length ? (
                    <div className="grid gap-4">
                      {words.map((item, index) => (
                        <Word_Module
                          key={`${item.word}-${index}`}
                          name={item.word}
                          meaning={item.meaning}
                          wordtype={item.wordtype}
                          index={index + 1}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-10 text-center">
                      <p className="font-semibold text-slate-700">
                        No words arrived yet.
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Start the backend and refresh this lesson.
                      </p>
                    </div>
                  )}
                </section>
              }
            />
            <Route
              path="/word/:word"
              element={<WordDetails words={words} sentences={sentences} />}
            />
            <Route path="/words" element={<Words words={words} />} />
          </Routes>
        </main>

        <nav className="flex gap-2 border-t border-slate-200 bg-white p-3 shadow-sm sm:rounded-b-lg">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/words" className={navLinkClass}>
            Library
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default App;
