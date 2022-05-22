import { useEffect, useState } from "react"
import '../styles/message.css'

const Message = ({ message, type, duration=4000 }: {
    message: string,
    type: 'error' | 'success' | 'info',
    duration?: number,
    openMessage: boolean,
}) => {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const closePop = setTimeout(() => {
            setOpen(false)
        }, duration)

        return () => clearTimeout(closePop)
    }, [])

  return (
    <div 
        className="message-pop"
        style={{
            backgroundColor: type==='success'?'rgb(52, 178, 94)':(type==='error'?'rgb(252, 69, 81)':'rgb(52, 155, 177)'),
            right: open?'50px':'-100%'
        }}
    >
        {message}
    </div>
  )
}

export default Message