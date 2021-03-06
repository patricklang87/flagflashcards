import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import CountryList from './components/countryList';
import FlagQuiz from './components/flagQuiz';
import { FlashCards } from "./components/FlashCards";
import KnownFlags from './components/knownFlags';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { loadFlags } from './utils/fetchFlags';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from './utils/auth';
import { setCurrentUser, removeCurrentUser } from './redux/userRedux';
//reddit toolkit and middleware: https://www.youtube.com/watch?v=qA6oyQQTJ3I



function App() {
  const flagDeck = useSelector(state => state.flipCard.deck);
  const currentUser = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flagDeck.length < 1) {
      dispatch(loadFlags());
    }

    const checkForLogin = async () => {
        if (localStorage.getItem('lyf_token')) {
          try {
            let response = await getUserData();
            console.log("in app", response.data);
            dispatch(setCurrentUser(response.data));
          } catch (err) {
            console.log(err);
          }
      } else {
        if (currentUser) {
          dispatch(removeCurrentUser());
        }
      }
    }
    
    checkForLogin();

  }, [dispatch, currentUser, flagDeck]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/CountryList' exact component={CountryList} />
            <Route path='/KnownFlags' exact component={KnownFlags} /> 
            <Route path='/FlashCards' exact component={FlashCards} />  
            <Route path="/FlagQuiz" exact component={FlagQuiz} />  
          </Switch>  
        </main>
      </Router>
      <footer>
        <p>Created with the <a href="https://restcountries.com/">restcountries.com</a> API. All data reflects information stored in this API.</p>
        <p>A project by <a href="https://langportfolio.herokuapp.com/" >Patrick Lang</a> &copy; 2021</p>
      </footer>
    </div>
  );
}

export default App;
