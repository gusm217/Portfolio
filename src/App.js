import './App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
