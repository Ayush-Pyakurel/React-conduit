//components imports
import Headers from './Components/Headers';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NewArticle from './Components/NewArticle';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';

//css imports
import './App.css';
import './Components/Headers.css';
import './Components/SignIn.css';
import './Components/SignUp.css';
import './Components/Dashboard.css';
import './Components/NewArticle.css';
import './Components/Settings.css';

//hooks imports
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  return (
    <div className='App'>
      <Router>
        <Headers setLoggedIn={setLoggedIn} loggedIn={loggedIn} />

        <Switch>
          <Route exact path='/' component={Dashboard} />
          {loggedIn ? (
            <>
              (<Route path='/settings' component={Settings} />
              <Route path='/newarticle' component={NewArticle} />)
            </>
          ) : (
            alert('You must be logged in to view this page')
          )}
          <Route
            path='/signin'
            component={() => {
              return <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
            }}
          />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
