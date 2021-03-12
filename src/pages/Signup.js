import React,{useState} from 'react'
import firebase from '../Config';
import {useHistory} from 'react-router-dom'
const Signup = ({setUser}) => {
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    let history = useHistory();


    //google signin

    const googleSigninHandler = (e)=>{
      e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        //var credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
       // var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setUser(user);
        history.replace('/')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        // ...
      });
    }    
const signupHandler = (e,email,password)=>{
    e.preventDefault();
    if(email!=='' || password !==''){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          setUser(user);
          history.replace('/')
          // ...
        })
        .catch((error) => {
          console.log(error)
          // ..
        });
    }
  
}

    return (  <section id="signbox">
        <div className="flex-wrap">
            <form>
                <label  for="email"> Email </label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="sign-up sign-in" type="email" placeholder="Email" /> 
                <label for="Password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className="sign-up sign-in" type='password' placeholder="Password"/>
                <button onClick={(e)=>signupHandler(e,email,password)}>Sign up</button>
                <br/>
            <hr/>
            <p style={{textAlign:"center"}}> or</p>
            <button onClick={(e)=>googleSigninHandler(e)} id="google-btn">continue with google</button>
            </form>
        </div>
        </section>
    );
}
 
export default Signup;