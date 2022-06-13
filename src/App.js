import './App.css';
import Headers from './Components/Headers';
import './Components/Headers.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Headers />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
