import { universalAPI } from "../api/api"

export const deleteObj = async (type: string, endpoint: string) => {
    if(window.confirm(`Are you sure you want to delete this ${type}`)){
        const { status, message } = await universalAPI('DELETE', endpoint)

        if(status === 'success'){
            window.location.reload()
        }else{
            console.error(message);
        }
    }
}