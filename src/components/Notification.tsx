import { useEffect } from "react"
import { useNotificationContext } from "../providers/NotificationProvider"
import '../styles/notification.css'

const Notification = () => {
    const [messages, setMessages] = useNotificationContext()

    useEffect(() => {
        if(messages.length > 0){
            setTimeout(() => setMessages([]), 4000)
        }
    // eslint-disable-next-line
    }, [messages])

  return (
    <div className="notification-modal"
        style={{
            right: messages.length === 0 ? '-100%': '30px',
        }}
    >
        {messages[0]}
    </div>
  )
}

export default Notification