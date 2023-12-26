
import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage=(props)=>{
    
    return     (    <div style={{height:'100vh'}}>
    <PrettyChatWindow
projectId="b75e5bd5-cd84-404c-b820-06feff8c98c0"
username={props.user.username}
secret={props.user.secret}
style={{ height: '100vh' }}
/>
</div>)


}
export default ChatsPage