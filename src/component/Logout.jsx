import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate  = useNavigate ();
    console.log(sessionStorage.removeItem("loginUsername"))
    useEffect(() => {
        navigate("/login");
        window.location.reload();   
    }, [1])
    
    
  return (
    <div>Logout OK</div>
  )
}

export default Logout