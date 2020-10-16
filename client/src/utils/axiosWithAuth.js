import axios from 'axios'

export const axiosWithAuto = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            baseURL: "http://localhost:3000/",
            Authorization: token
        }
    })
}