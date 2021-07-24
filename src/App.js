import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
