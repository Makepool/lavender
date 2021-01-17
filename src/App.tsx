import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Nails from './pages/nails';
import Example from './pages/example';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/nails" component={Nails} />
        <Route exact path="/*" component={Example} />
      </Switch>
    </Router>
  );
}

export default App;
