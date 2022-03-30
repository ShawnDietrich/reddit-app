import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "./Components/searchBar/searchBar";
import { TopNews } from "./Components/topNews/news";
import React from "react";
import Card from "./Components/Card/card";

function App() {
  return (
    <>
      <header className="App-header">This is the header</header>
      <main>
        <Card />
      </main>
    </>
  );
}

export default App;
