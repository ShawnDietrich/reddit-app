import logo from './logo.svg';
import './App.css';
import {SearchBar} from './Components/searchBar/searchBar';
import {TopNews} from './Components/topNews/news';
import {RedditBlock} from './Components/redditBlock/reddit'
import {BackButton} from './Components/backButton/back'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <RedditBlock />
        <TopNews />
        <BackButton />
      </header>
    </div>
  );
}

export default App;
