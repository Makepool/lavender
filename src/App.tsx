import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Nails from './pages/nails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-the-lavender-room" component={About} />
        <Route exact path="/nails" component={Nails} />
      </Switch>
    </Router>
  );
}

export default App;
