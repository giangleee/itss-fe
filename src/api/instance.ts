import axios from 'axios'
const instance = axios.create({
    baseURL:"https://itss-be-production.up.railway.app/api/v1"
})

export default instance