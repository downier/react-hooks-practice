import './App.css';
import { Search } from './Search';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Please login with auth0 to search books </h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <header>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
