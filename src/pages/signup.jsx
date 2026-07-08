import "../styles/login.css"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/spinner";

function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()

     
async function handleSignup() {
    setLoading(true)
    const startTime = Date.now()
    try{
        event.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password,
                confirmation
            })
        })

        const data = await response.json()

        //calculate how long the request took
        const timeElapsed = Date.now() - startTime

        //wait until 2 seconds has passed
        if(timeElapsed < 2000) {
            await new Promise(resolve => {
                setTimeout(resolve, 2000 - timeElapsed)
            })
        }

        setLoading(false)

        if(password != confirmation) {
            alert('Passwords do not match')
            return
        }

        if(response.ok) {
            // alert(data.message)
            navigate('/')
            return;
        } else {
            alert(data.message)
            return
        }
    } catch(error) {
        console.log(error.message)
        alert('Network error, please try again')
    }
}
    

    return(
        <>
        <main className="major">
            <div className="container">
                <form onSubmit={handleSignup}>
                    <h2 className="header">Register</h2>
                    <label htmlFor="username">username</label><br />
                    <input type="text" className="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required/><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="password">password</label><br />
                    <input type="password" className="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/><br />
                    <label htmlFor="confirm password">Confirm Password</label><br />
                    <input type="password" className="confirmation" placeholder="Confirm password" onChange={(e) => setConfirmation(e.target.value)} required/><br />
                    <button type="submit" disabled={loading}>{loading ? <Spinner /> : "Register"}</button>
                    <Link to='/'>Already have an account? Login</Link>
                </form>
            </div>
        </main>
        <footer>
            <p>
                &copy; copywrite, all rights reserved 2026
            </p>
        </footer>
        </>
    )
}

export default Signup;

