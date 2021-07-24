import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
