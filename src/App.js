import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <SearchEngine />

      <footer>
        {" "}
        <a
          href="https://github.com/TeichlerV/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open source code{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
