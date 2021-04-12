import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import CountryList from './components/countryList';
import FlagQuiz from './components/flagQuiz';
import { FlashCards } from "./components/FlashCards";
import KnownFlags from './components/knownFlags';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { loadFlags } from './redux/fetchFlags';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//reddit toolkit and middleware: https://www.youtube.com/watch?v=qA6oyQQTJ3I



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlags());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path='/Home' exact component={Home} /> 
            <Route path='/CountryList' exact component={CountryList} />
            <Route path='/KnownFlags' exact component={KnownFlags} /> 
            <Route path='/FlashCards' exact component={FlashCards} />  
            <Route path="/FlagQuiz" exact component={FlagQuiz} />  
          </Switch>  
        </main>
      </Router>
      <footer>
        <h3>Created with the <a href="https://restcountries.eu/">restcountries.eu</a> API</h3>
        <h3>A project by <a href="https://patricklang87.github.io/portfolio/" >Patrick Lang</a></h3>
        <h3>&copy; 2021</h3>
      </footer>
    </div>
  );
}

export default App;
