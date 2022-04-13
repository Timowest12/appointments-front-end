import React, { useState } from 'react'
import Validation from './Validation'
function Signup() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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
        // fetch('https://localhost:3000/users/register', {
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
        //             window.location.href = '/login'
        //         }
        //     })
    }

  return (
    <div>
        <div>
            <h2>Create Account</h2>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="text" name='name' className="form-control" id="exampleInputUsername1" placeholder="Enter username" value={user.name} onChange={handleChange} />
                {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} onChange={handleChange} />
                {errors.email && <p className="text-danger">{errors.email}</p>}
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password} onChange={handleChange} />
                {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                <input type="password" name='password2' className="form-control" id="exampleInputConfirmPassword" placeholder="Confirm Password" value={user.password2} onChange={handleChange} />
                {errors.password2 && <p className="text-danger">{errors.password2}</p>}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Signup;
