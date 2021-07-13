import './App.css';
import { Search } from './Search';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Callback from './Callback/Callback';

const Home = () => (
  <div>
    <h2> Please login with auth0 to search books </h2>
  </div>
);

function HomePage(props) {
  const { authenticated } = props;

  const logout = () => {
    props.auth.logout();
    props.history.push('/');
  };

  if (authenticated) {
    const { name } = props.auth.getProfile();
    return (
      <div>
        <h1>Howdy! Glad to see you back, {name}.</h1>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>I don't know you. Please, log in.</h1>
      <button onClick={props.auth.login}>Log in</button>
    </div>
  );
}

function App(props) {
  const authenticated = props.auth.isAuthenticated();

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
