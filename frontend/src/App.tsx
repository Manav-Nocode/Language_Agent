import Word_Module from "../Components/Word_Module";
import Words from "../pages/Words";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-amber-300 w-full h-screen flex flex-col justify-center items-center">
      <BrowserRouter>
        {/* Main Layout Area */}
        <div className="bg-white h-screen w-[70%] flex flex-col justify-between">
          <div id="header" className="h-20 w-full bg-red-400"></div>

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Word_Module />} />
              <Route path="/words" element={<Words />} />
            </Routes>
          </main>

          {/* Navigation / Tab-bar */}
          <div
            id="Tab-bar"
            className="flex w-full bg-green-200 h-20 border-t-2 border-black"
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
      </BrowserRouter>
    </div>
  );
};

export default App;
