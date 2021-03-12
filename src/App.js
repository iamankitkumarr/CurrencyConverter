import './styles/index.scss';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React,{useState} from 'react'



function App() {
  const [user, setUser] = useState('');
  
  return ( <BrowserRouter>
    <div className="App"> 
      <Navbar user={user} setUser={setUser}/>
      <Switch>
     <Route exact path='/'>< Home user={user} setUser={setUser}/></Route> 
     <Route exact path='/Signin'>< Signin user={user} setUser={setUser}/></Route> 
       <Route exact path='/Signup'> <Signup user={user} setUser={setUser}/> </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
