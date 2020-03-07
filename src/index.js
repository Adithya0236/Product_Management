import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from "./signup"
import Login from './login';
import Dashboard from './dashboard';
import View2 from './view2';

import Add from './add';



ReactDOM.render(
(<Router>
 <Switch>
              <Route exact path="/" component={App}/>
              <Route  path="/signup" component={Signup}/>
              <Route  path="/login" component={Login}/>
              <Route  path="/dashboard" component={Dashboard}/>
              <Route  path="/view2" component={View2}/>
             

              <Route  path="/add" component={Add}/>


            </Switch>

</Router>), 
    document.getElementById('root'));
serviceWorker.unregister();
