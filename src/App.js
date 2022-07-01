//components imports
import Headers from './Components/Headers';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NewArticle from './Components/NewArticle';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';
import LoggedInUser from './Components/LoggedInUser';
//import PageNotFound from './Components/PageNotFound';
import ProtectedRoute from './Components/ProtectedRoute';
import Article from './Components/Article';

//css imports
import './App.css';
import './Components/Headers.css';
import './Components/SignIn.css';
import './Components/SignUp.css';
import './Components/Dashboard.css';
import './Components/NewArticle.css';
import './Components/Settings.css';
import './Components/LoggedInUser.css';
import './Components/Article.css';

//hooks imports
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ConduitContextProvider from './Components/ConduitContextProvider';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  // console.log(loggedIn);

  return (
    <ConduitContextProvider>
      <div className='App'>
        <Router>
          <Headers
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            user={loggedInUser}
          />
          <div>
            <Toaster position='buttom-right' />
          </div>

          <Routes>
            <Route exact path='/' element={<Dashboard />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/settings' element={<Settings />} />
              <Route path='/newarticle' element={<NewArticle />} />
              <Route
                path='/user/:username'
                element={
                  <LoggedInUser user={loggedInUser} setUser={setLoggedInUser} />
                }
              />
              <Route path='/article' element={<Article />} />
            </Route>

            <Route path='/signin' element={<SignIn />} />

            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='*' element={<PageNotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </ConduitContextProvider>
  );
}

export default App;
