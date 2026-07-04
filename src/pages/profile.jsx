import '../styles/profile.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/spinner';

function Profile() {
    const [profile, setProfile] = useState(null)
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchProfile() {
            setLoading(true)
            const startTime = Date.now()
            try{
                const token = localStorage.getItem('token')
                if(token) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
                        method: 'GET',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization' : `Bearer ${token}`
                        }
                    })

                    if(response.ok) {
                        const data = await response.json()
                        setProfile(data)
                        const timeElapsed = startTime - Date.now()
                        if(timeElapsed < 2000) {
                            await new Promise(resolve => {
                                setTimeout(resolve, 2000 - timeElapsed)
                            })
                        }
                        setLoading(false)
                    } else {
                        console.log('JWT expired')
                        localStorage.removeItem('token')
                        navigate('/')
                        return
                    }
                } else {
                    console.log('Token not found')
                    navigate('/')
                    return
                }
            }catch(error) {
                console.log(error.message)
            }
        }
        fetchProfile();
    }, [navigate])

    if(loading) {
        return <Spinner />
    }

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/', {replace:true})
    }
    return(
        <>
        <div className="maincontainer">
            <div className="card">
                <div className="avatar">
                    👤
                </div>

                <div className="card-content">
                    <h2>{profile?.username}</h2>

                    <div className="info">
                        <p><strong>Email:</strong> {profile?.email}</p>
                        {/* <p><strong>Gender:</strong>{profile?.gender}</p> */}
                    </div>

                    <div className="buttons">
                        <button className="btn update">Update Profile</button>
                        <button className="btn logout" onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Profile;