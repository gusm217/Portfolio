import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home.js';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
