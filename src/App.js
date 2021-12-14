import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Nav/Nav';
import Home from "./Pages/Home"
import NotFoundPage from './Pages/NotFoundPage';
import {BrowserRouter as Router,
Switch, Route} from "react-router-dom";
import MoviesPage from './Pages/MoviesPage';
import SearchPage from './Pages/SearchPage';
import 'react-multi-carousel/lib/styles.css';


function App() {
  
  return (

    <div className="App">

      <Router>

        <Navigation />

        <Switch>

          
          <Route path="/search/:use" component={SearchPage} />

          <Route path="/movies" exact component={MoviesPage} />
          
        
          <Route path={["/", "/react-animepedia/"]} component={Home} />

          <Route path="*" component={NotFoundPage} />

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
