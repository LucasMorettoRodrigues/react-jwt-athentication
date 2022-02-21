import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// API
import api from '../services/api.service'

// Auth
import { getUser, logout } from '../services/auth.service'

const MyApp = () => {

    const navigate = useNavigate()

    // Testing request of loggedUser
    useEffect(() => {
        api.get("/projects")
            .then(data => console.log(data.data.projects))
    }, [])

    const handleOnClick = () => {
        logout()
        navigate("/login")
    }

    return (
        <main>
            <h1>MyApp</h1>
            <h2>Hello {getUser().user.name}</h2>
            <button onClick={handleOnClick}>Log out</button>
        </main>
    )
}

export default MyApp