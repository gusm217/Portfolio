import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Portfolio">
          <Redirect to="/Portfolio/home" />
        </Route>
        <Route exact path="/Portfolio/home" component={Home} />
        <Route exact path="/Portfolio/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
