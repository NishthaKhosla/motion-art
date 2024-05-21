import React from "react";
import './nav.css'
 const Navbar = () =>{
    const navigate = () => {
        window.location.href = 'https://codecanyon.net/checkout/102283249/create_account?_ga=2.80577938.460239004.1715932567-1978881974.1715932567';
      };

    return(
    <>
    <div className="navbar">
        <img src="/envato-market.png" alt="Logo"  className="logoo" />
        <button className="buttonn" onClick={navigate}>Buy now</button>
    </div>
    </>
   
    
    )
      
 }

 export default Navbar;