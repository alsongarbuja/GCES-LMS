/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { universalAPI } from '../../../api/api'
import ShowLayout from '../../../layouts/crud/ShowLayout'
import { LimitModel } from '../../../types/models'

const LimitShow = () => {

    const { limitId } = useParams()
    const [limit, setLimit] = useState<LimitModel>()

    const fetchLimit = async () => {
        const { data, status, message } = await universalAPI('GET', `/limit/${limitId}`)

        if(status === 'success'){
            setLimit(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchLimit()
    }, [])

  return (
    <ShowLayout title='Limit'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Limit : </b> {limit?.quantity}
                </p>
                <p>
                    <b>Level : </b> {limit?.level}
                </p>
                <ul>
                    {limit?.sub_quantity.map((sub, i) => (
                        <li key={i}>
                            <b>{sub.type}</b>: {sub.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </ShowLayout>
  )
}

export default LimitShow