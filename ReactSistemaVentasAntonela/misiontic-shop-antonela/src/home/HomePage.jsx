import React, {Fragment, useState, useEffect} from 'react'
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';
import { useAuth0 } from "@auth0/auth0-react";


function HomePage() {
    const {user, isAuthenticated} = useAuth0();
    const [validUser, setValidUser] =useState(false);
    const {loginWithRedirect} = useAuth0();
    const validateUserRole = async () =>{
      const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`);
      const jsonResponse = await response.json();
      return jsonResponse;
  
    }
    const grantAccess= async()=>{
      let userData;
      if(isAuthenticated){
        userData = await validateUserRole();
      }
      else{
        if(!verifySesion()){
            loginWithRedirect();
        }
         
        setValidUser(false);
        return;
      }
      
      if(userData){
        if(userData.rol != "invitado"){
          setValidUser(true);
          localStorage.setItem("state", userData.rol);
        }
        else{
            localStorage.setItem("state", userData.rol);
            setValidUser(false)
        }
      }
      else{
        setValidUser(false)
      }
    }
    const verifySesion = () =>{
        const cookies = document.cookie;
        let state = false;
        if(cookies.includes('auth0')){
            state= true;
        }
        return state;

    }
    useEffect(() => {
        grantAccess();
        verifySesion();
    }, [isAuthenticated, validUser]);
    
    return (
        <div className="container">
        {validUser?<h1>
          Bienvenido al sistema de ventas de Antonela Respostería
        </h1>:<ForbidenComponent/>}
      </div>
    )
    
}

export default HomePage
