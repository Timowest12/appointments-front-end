import React, { useState } from 'react'
import Validation from './Validation'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const errors = Validation(user)
        setErrors(errors)
        // fetch('https://localhost:3000/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.error) {
        //             alert(data.error)
        //         } else {
        //             alert(data.message)
        //             window.location.href = '/'
        //         }
        //     })
    }

  return (
    <div>
        <div>
            <h2>Login</h2>
        </div>
        <form>
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input type='email' name='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' value={user.email} onChange={handleChange} />
                {errors.email && <p className="text-danger">{errors.email}</p>}
                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>
            <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input type='password' name='password' className='form-control' id='exampleInputPassword1' placeholder='Password' value={user.password} onChange={handleChange} />
                {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <button type='submit' className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login