import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Term} from './Term';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        GLOSSARY SYSTEM
      </h3>
      <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/term' component={Term}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
