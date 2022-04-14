import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/searchBar/searchBar";
import SideReddit, { TopNews } from "./Components/SideReddit/sideReddit";
import React from "react";
import Home from "./Components/home/home";

function App() {
  return (
    <>
      <header className="App-header">The Reddit App</header>
      <SearchBar />
      <main>
        <Home />
      </main>
      <aside>
      <SideReddit />
      </aside>
    </>
  );
}

export default App;
