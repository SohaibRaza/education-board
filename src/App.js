import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "./layouts/admin.js";

// import './assets/stylesheet.css';

const hist = createBrowserHistory();

function App() {
  return (
    <div className="">
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
