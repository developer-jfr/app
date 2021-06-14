import { Button } from 'antd'
import { connect } from 'formik'
import React, { useEffect, useState } from 'react'
import { ChatPageType } from '../../api/chat-api'


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

 const ChatPage : React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}



const Chat: React.FC = () => {
  return (
        <div>
        <Messages />
        <AddMessageForm  />
        </div>
    )
}
const Messages : React.FC = () => {
    const [messages, setMessages] = useState<ChatPageType[]>([])
    

useEffect( () => {
   
    ws.addEventListener('message', (e: any) => {
        let newMessage = JSON.parse(e.data)
       // @ts-ignore 
        setMessages((prevMesssages) => [...prevMesssages, ...newMessage])
    })
}, [])

return (
        <div  style = {{height: '400px' , overflowY : 'auto'}}>
            
            {messages.map( (m, index) => <Message key = {index} message = {m} />)}
        </div>
    )
}
const Message: React.FC <{message: ChatPageType}> = ({message}) => {
  
    return (
        <div>
<img src = {message.photo} /> <b>{message.userName}</b>
<br />
{message.message}
<hr />
        </div>
    )
}

const AddMessageForm : React.FC = () => {
    const [message, setMessage] = useState('')
    const [ready, setReady] = useState<'ready' | 'pending'> ('pending')

    useEffect( () => {
        const openHandler = () => {
            setReady('ready') 
        }
            
       ws?.addEventListener('open' , openHandler)
       return () => {
           ws.removeEventListener('open' , openHandler)
           ws.close()
       }
    }, [ws]) 
    
    const sendMessage = () => {
        if(!message) {
            return
        }
        ws.send(message)
        setMessage('')
    }
  

    return <div style={{marginTop: '10px'}}>
            <div>
                <textarea onChange = {(e) => setMessage(e.currentTarget.value)} value = {message} ></textarea>
            </div>
            <div>
                <Button onClick = {sendMessage}  >Send</Button>
            </div>
        </div>
       
    
}
export default ChatPage