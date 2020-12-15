import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from "./pages/Error404"
import Cadastro from "./pages/Cadastro"
import Inicio from "./pages/Inicio"

function Routes() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Inicio} />   
            <Route path="/cadastro" exact component={Cadastro} />    
            <Route path="*" exact component={Error} />    
          </Switch>
        </div>
      </Router>
    );
  }
  export default Routes;