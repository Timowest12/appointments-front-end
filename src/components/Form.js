import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div>
        <div>
            <h2>Vespa Splash Page</h2>
        </div>
        <div>
            <Link to="/login" class="btn btn-primary">Login</Link>
            <Link to="/signup" class="btn btn-primary">Signup</Link>
        </div>
    </div>
  )
}

export default Form