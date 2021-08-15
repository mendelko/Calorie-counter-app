import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import "../App.css"
import Main from "./Main";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
