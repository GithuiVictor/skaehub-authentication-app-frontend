import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileOverview from "./components/Profile/ProfileOverview";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/profleOverview" component={ProfileOverview}/>
      </Switch>
    </Router>
  );
}

export default App;
