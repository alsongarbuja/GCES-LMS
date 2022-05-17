/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import ShowLayout from '../../../layouts/crud/ShowLayout'
import { FineModel } from '../../../types/models'

const FineShow = () => {

    const { fineId } = useParams()
    const [fine, setFine] = useState<FineModel>()

    const fetchFine = async () => {
        const { data, status, message } = await universalAPI('GET', `/fine/${fineId}`)

        if(status === 'success'){
            setFine(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchFine()
    }, [])

  return (
    <ShowLayout title='Fine'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Amount : </b> {fine?.fine}
                </p>
            </div>
        </div>
    </ShowLayout>
  )
}

export default FineShow