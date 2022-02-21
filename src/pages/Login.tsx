import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Auth
import { login } from '../services/auth.service'

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(user, password)
            .then(() => navigate("/myapp"))
            .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="user">User: </label>
                <input id="user" onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Sing In" />
        </form>
    )
}

export default Login