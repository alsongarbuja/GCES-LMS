import { useEffect, useState } from "react"
import '../styles/message.css'

const Message = ({ message, type, duration=4000, callBack }: {
    message: string,
    type: 'error' | 'success' | 'info',
    duration?: number,
    openMessage: boolean,
    callBack: Function,
}) => {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const closePop = setTimeout(() => {
            setOpen(false)
            callBack()
        }, duration)

        return () => clearTimeout(closePop)
    // eslint-disable-next-line
    }, [])

  return (
    <div 
        className="message-pop"
        style={{
            backgroundColor: type==='success'?'rgb(52, 178, 94)':(type==='error'?'rgb(252, 69, 81)':'rgb(52, 155, 177)'),
            right: open?'50px':'-100%',
            transition: "all 0.5s ease-in-out",
        }}
    >
        {message}
    </div>
  )
}

export default Message