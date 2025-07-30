import React, { useState } from 'react'
import Logo from '../assets/Logo.svg';


const LeftCard = ({darkmode,toggleDarkmode}) => {
    // const [darkmode, setDarkmode] = useState(false)
    const [institution, setInstitution] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const theLogin = (e) => {
        // e.preventDefault()
        console.log('Institution_Code', institution)
        console.log('Username:', username);
        console.log('Password:', password);
    }

    return (
        <div className= 'left-card-wrapper'>
            <button type="button" className="theme-toggle" onClick={toggleDarkmode}>
                {darkmode ? '☀️' : '🌑'}
            </button>

            <form className='login-form' onSubmit={theLogin} action="">
                <div>
                    <img className="logo" src={Logo} alt="Qore Logo" />
                </div>   
                <h1>Log in</h1>
                <p>Welcome back! Please enter your details.</p>
                <div>
                    <label htmlFor='label'>Institution Code</label>
                    <input id='label' className='institution' placeholder='Enter your Institution Code' onChange={(e)=> setInstitution(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='label'>Username</label>
                    <input id='label' className='username' placeholder='Enter your Username' onChange={(e)=> setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='label'>Password</label>
                    <input  id='label'className='password' placeholder='********' type='password' onChange={(e)=> setPassword(e.target.value)} required/>
                </div>
            
                <div>
                    <button className='button' type="submit">Login</button>
                </div>
                
                <a href=" " className="account-officer">
                    Account Officer Sign In                   
                </a>
            
            </form>
        </div>
    )
}

export default LeftCard;