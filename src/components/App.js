import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import "../App.css"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./fire";
import MealForm from "./MealForm";
import Main from "./Main";

function App() {

  const [user] = useAuthState(auth)
  console.log(user)
  
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
