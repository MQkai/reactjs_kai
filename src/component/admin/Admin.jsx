import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <Link to="./all">all</Link>  <br></br>
      <Link to="./deleted">deleted</Link><br></br>
      <Link to="./active">active</Link><br></br>
    </div>
  )
}

export default Admin