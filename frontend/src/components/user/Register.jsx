import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })


    const navigate = useNavigate()

  


    return (
        <div className='row my-5'>
            <div className="col-md-6 mx-auto">
                <div className="card shadow-sm">
                    <div className="card-header bg-white">
                        <h5 className="text-center mt-2">
                            Register
                        </h5>
                    </div>
                    <div className="card-body">
                        <form className="mt-5" >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name*</label>
                                <input type="text"
                                    value={user.name}
                                    onChange={(e) => setUser({
                                        ...user, name: e.target.value
                                    })}
                                    className="form-control" id="name"/>
                      
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address*</label>
                                <input type="email" 
                                    value={user.email}
                                    onChange={(e) => setUser({
                                        ...user, email: e.target.value
                                    })}
                                    className="form-control" id="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password*</label>
                                <input type="password" 
                                    value={user.password}
                                    onChange={(e) => setUser({
                                        ...user, password: e.target.value
                                    })}
                                    className="form-control" id="password" />
                                  
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
