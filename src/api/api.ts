import axios from "axios"

export const universalAPI = async (method: string, endpoint: string,  payload: any = {}) => {
    let status: string = 'success'
    let data: any = {}
    let message: string = ''

    await axios({
        method,
        url: endpoint,
        data: payload,
        baseURL: process.env.REACT_APP_BASE_API_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        data = res?.data.data

        if(res?.data.message)
            message = res?.data.message
    }).catch(err => {
        if(err.response){
            data = err.response.data
            message = err.response.data.message
            status = 'error'
        }else{
            status = 'error'
            message = 'Connection error'
        }
    })

    return { data, status, message }
}