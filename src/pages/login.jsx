import "../styles/login.css"
import { useState } from "react";
import { replace, useNavigate, Link } from "react-router-dom";
import Spinner from "../components/spinner";

function Login() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()

     
async function handleLogin() {
    setLoading(true)
    const startTime = Date.now()
    try{
        event.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        //calculate how long the request took
        const timeElapsed = startTime - Date.now()

        //wait until 2 seconds has passed
        if(timeElapsed < 2000) {
            await new Promise(resolve => {
                setTimeout(resolve, 2000 - timeElapsed)
            })
        }

        setLoading(false)


        if(response.ok) {
            localStorage.setItem('token', data.token)
            // alert(data.message)
            navigate('/profile')
            return;
        } else {
            alert('Login failed: ' + data.message)
            navigate('/', {replace: true})
            return
        }
    } catch(error) {
        console.log(error.message)
    }
}
    

    return(
        <>
        <main className="major">
            <div className="container">
                <form onSubmit={handleLogin}>
                    <h2 className="header">Login</h2>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" className="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/><br />
                    <button type="submit" disabled={loading}>{loading ? <Spinner /> : "Login"}</button>
                    <Link to='/signup'>You dont have an account? Sign up</Link>
                </form>
            </div>
        </main>
        <footer>
            <p>
                &copy; Copyrite, all rights reserved 2026
            </p>
        </footer>
        </>
    )
}

export default Login;