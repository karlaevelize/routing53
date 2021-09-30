import './App.css';
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import DiscoverPage from "./components/DiscoverPage"
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Link to="/discover">
        <button>Search Movies</button>
      </Link>
      <Switch>
        {/* define what the params are called :id or :banana */}
        <Route path="/movie/:id" component={MovieDetails}/>
        <Route path="/discover" component={DiscoverPage} />
      </Switch>
    </div>
  );
}

export default App;
