import axios from 'axios'
import { getUser } from './auth.service'

const api = axios.create({
    baseURL: "http://localhost:5001/api/v1"
})

api.interceptors.request.use(async config => {
    const loggedUser = getUser()

    if (loggedUser) {
        config.headers!.Authorization = `Bearer ${loggedUser.token}`
    }

    return config
})

export default api