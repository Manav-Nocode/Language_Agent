import { useEffect, useState } from "react";
import Word_Module from "../Components/Word_Module";
import Words from "../pages/Words";
import { Routes, Route, Link } from "react-router-dom";

interface WordData {
  word: string;
  meaning: string;
}

const App = () => {
  const [words, setWords] = useState<WordData[]>([]);
  useEffect(() => {
    const url = "http://localhost:4000/api/words";
    async function Newwords() {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setWords(data.data);
      console.log(data);
    }
    Newwords();
  }, []);

  return (
    <div className="bg-amber-300 w-full h-screen flex flex-col justify-center items-center">
      {/* Main Layout Area */}
      <div className="bg-white h-screen w-[70%] flex flex-col justify-between overflow-hidden">
        <div id="header" className="h-20 w-full bg-red-400 flex shrink-0"></div>

        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div className="overflow-y-auto h-full w-full">
                  {words.length > 0 ? (
                    words.map((item, index) => (
                      <Word_Module
                        key={index}
                        name={item.word}
                        meaning={item.meaning}
                      />
                    ))
                  ) : (
                    <p className="p-10 text-center">
                      Loading your German words...
                    </p>
                  )}
                </div>
              }
            />
            <Route path="/words" element={<Words />} />
          </Routes>
        </main>

        {/* Navigation / Tab-bar */}
        <div
          id="Tab-bar"
          className="flex w-full bg-green-200 h-20 border-t-2  border-black shrink-0"
        >
          <Link
            to="/"
            className="flex-1 flex items-center justify-center font-semibold hover:bg-green-300 transition-colors border-r border-black"
          >
            Home
          </Link>

          <Link
            to="/words"
            className="flex-1 flex items-center justify-center font-semibold hover:bg-green-300 transition-colors border-l border-black"
          >
            Words
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
