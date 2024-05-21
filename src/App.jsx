// rfce snippets

import Welcome from "./components/Welcome";
import Movie from "./components/Movie";
import Cats from "./components/Cats";
import Footer from "./components/Footer";

function App() {
  return (
    /* Why the p-1 is fixing all the bg??!?? */
    <main className="bg-zinc-900 h-full text-slate-200 p-1">
      <Welcome />
      <div className="flex place-content-between mx-10">
        <Movie />
        <Cats />
      </div>
      <Footer />
    </main>
  );
}

export default App;
