import axios from "axios"

/**
 * 
 * @param method 
 * @param endpoint 
 * @param payload 
 * @returns 
 */
// calls API to the provided end point
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

        // add message if response contains any message
        if(res?.data.message)
            message = res?.data.message
    }).catch(err => {
        status = 'error'
        if(err.response){
            data = err.response.data
            message = err.response.data.message
        }else{
            message = 'Connection error'
        }
    })

    return { data, status, message }
}