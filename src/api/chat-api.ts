
let subcribe = [] as SuspenseChatType[]

let ws : WebSocket | null


const messageHandler =  (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subcribe.forEach(s => s(newMessage))
}


const closeFunction = () => {
    console.log('close') 
    setTimeout(connect , 3000) 
}
function connect() { 
    ws?.removeEventListener('close', closeFunction)
    ws?.close()
ws =  new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
ws?.addEventListener('message', messageHandler)

ws?.addEventListener('close' , closeFunction)

}



export const chatAPI = {
  
  start: () => {
      connect()

  },
  
    subcribes: (callback: SuspenseChatType) => {
       subcribe.push(callback)
        return () => {
            subcribe = subcribe.filter(s => s !== callback)
        }
    },
    unsubcribes: (callback: SuspenseChatType) => {
       subcribe = subcribe.filter(s => s !== callback)
         
     },
     sendMessage : (message : any) => {
ws?.send(message)
     },
     stop : () => {
        ws?.addEventListener('message', messageHandler)

        ws?.addEventListener('close' , closeFunction)
     }
}


type SuspenseChatType = (messages: ChatPageType[]) => void

export type ChatPageType = {
    
        message: string
        photo: string
        userId: number
        userName: string
      
     
}