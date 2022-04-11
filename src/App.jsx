import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/searchBar/searchBar";
import { TopNews } from "./Components/topNews/news";
import React from "react";
import Home from "./Components/home/home";

function App() {
  return (
    <>
      <header className="App-header">The Reddit App</header>
      <main>
        <SearchBar/>
        <Home />
      </main>
    </>
  );
}

export default App;
