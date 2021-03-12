import {Link} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

import firebase from '../Config';
const Navbar = ({user, setUser}) => {
    let history = useHistory();

    return (
        <nav className="navbar">
            <h1>Currency Converter</h1>
            {user? <p onClick={()=>{firebase.auth().signOut(); setUser(''); history.replace('/signin') }}>logout</p>: <div>
                  
                   <Link to ='/Signup'><p>  Signup </p></Link>
                   <Link to ='/Signin'><p>  Signin </p></Link>
               </div>}
         
        </nav>
    );
}
 
export default Navbar;


