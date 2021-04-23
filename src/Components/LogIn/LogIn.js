import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Firebase/FirebaseConfig/FirebaseConfig';
import './LogIn.css'
import { signContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig);


const LogIn = () => {
  const history=useHistory()
  const location=useLocation()
  let { from } =location.state || { from: { pathname: "/" } };
  
    const [loggedInUser,setLoggedInUser]=useContext(signContext)
    const [newUser,setNewUser]=useState(false)
    const [user,setUser]=useState({
      isSigned:false,
      name:'',
      success:false,
      email:'',
      photo:'',
      password:'',
      error:''
    })
 
    
    const handleChange=(e)=>{
      let isFormValid=true
      if(e.target.name ==="email"){
        isFormValid= /\S+@\S+\.\S+/.test(e.target.value)
     
        
      }
      if(e.target.name === 'password'){
        const isPass=e.target.value.length>8
       const pass=/\d{1}/.test(e.target.value)
       
       isFormValid=isPass && pass
      
      }
     if(isFormValid){
      const newUser={...user}

     newUser[e.target.name]=e.target.value
    
    
     setUser(newUser)
     }
      console.log(user)
    }

    const handleGoggleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
     const users = result.user;
     const newUser={...user}
     newUser.name=users.displayName
     newUser.email=users.email
     newUser.photo=users.photoURL
     setUser(newUser)
    const {displayName,email}=users
    const SignedInUser={name:displayName,email,}
    
    setLoggedInUser(SignedInUser)
    history.replace(from);
    sessionStorage.setItem('email',email)
    sessionStorage.setItem('name',displayName)
    
  
  }).catch((error) => {
   
    console.log(error)
   
    
  });



    }





    const handleSubmit=(e)=>{
      e.preventDefault()
      if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {

   // var users = userCredential.user;
    const newSign={...user}
    newSign.success=true;
    newSign.error=""
    setUser(newSign)

     history.replace(from)
    user({
      name:'',
      email:'',
      password:''
    })
    // console.log(user)
    
  
  })
  .catch((error) => {
   
    var errorMessage = error.message;
    
    const err={...user}
    err.error=errorMessage
    err.success=false
    setUser(err)
   
  });
  }

  if(!newUser && user.email && user.password){
   
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    
    var user = userCredential.user;
 
    setLoggedInUser({email:user.email})
    sessionStorage.setItem('email',user.email)
    history.replace(from);

  })

  .catch((error) => {
  
    var errorMessage = error.message;
    const err={...user}
    err.error=errorMessage
    err.success=false
    setUser(err)
  });
  }

    }

    const verifyEmail=()=>{
      var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
 console.log(error)
});

    }
    
    return (
        <div>
            
            <form className="log mt-5 pt-5" onSubmit={handleSubmit}>
        
            <p>{newUser?'Create An Account': 'Log-In'}</p>
            {newUser &&  
                <input onChange={(e)=>handleChange(e)} name="name" required className="form-control" type="text" placeholder="Enter Name"/>
            }
                <br/>
             
                
                <input onChange={handleChange} name="email" required className="form-control" type="email" placeholder="Enter Email" />
                <br/>
                <input onChange={handleChange} name="password" className="form-control" type="password" placeholder="Enter Password" />
                <br/>
                 {newUser &&
                <div className="d-flex">
                <input style={{marginTop:'6px'}} className=" mx-1" type="checkbox" value="remember me"/>
                <label>Remember me</label>
                <p className="text-warning ml-5">Forgot Password</p>
                </div>
}


               
                <br/>

               
              
                
              
               
                  
                  <input className="form-control bg-warning" type="submit" value= {newUser? 'Create an account':'Log_In'}/>
                
                  <br/>
                
                
                <p><small>{newUser ? 'Already have an account?':'Don,t have an account ?'}</small> <span className="text-warning" onClick={()=>setNewUser(!newUser)}>{newUser?'Log_In': 'Create an account'}</span></p>
            
            
                
                  {
                    user.error && <p className="text-danger">{user.error}</p>
                  }
                
             
          
            
            


            </form>
           
           
           
           
            <br/>
              <p className="or">or</p>
              

            <button className="btn btn-outline-primary mb-3" onClick={handleGoggleSignIn} type="button" style={{borderRadius:'8px',  padding:'8px'}}>
                Continue With Goggle</button>
                
        </div>
    );
};

export default LogIn;