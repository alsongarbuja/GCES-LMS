import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

const Context = createContext<[string[], Dispatch<SetStateAction<string[]>>]>([[], ()=>{}]);

export const NotificationProvider = ({ children }: {children: JSX.Element}) => {
    const [messages, setMessages] = useState<string[]>([])

    return (
        <Context.Provider value={[messages, setMessages]}>{children}</Context.Provider>
    )
}

export const useNotificationContext = () => {
    return useContext(Context);
}