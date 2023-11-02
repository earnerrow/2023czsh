import axios from 'axios'
// axios.defaults.baseURL='/api'
const instance=axios.create({
    baseURL:'https://api.it120.cc/xiaochengxu/',
    timeout:1000*4
})
instance.interceptors.request.use((config)=>{
    let token="954b8063-3260-4960-a70b-c21ba3c1bc16"
    localStorage.setItem('token',token)
    config.headers['Content-Type']='application/x-www-form-urlencoded'
    config.headers.token=token
    return config
},(err)=>{
    return Promise.reject(err)
})

instance.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(err)
})

export default instance