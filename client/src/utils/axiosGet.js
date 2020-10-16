import { axiosWithAuth } from './axiosWithAuth'

export const axiosGet = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then(res => {
        console.log(res)
        return res
    }).catch(err => {
        console.log(err)
    })
}