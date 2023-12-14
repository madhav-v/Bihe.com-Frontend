import {ChatState} from "../../Context/chatProvider"
import ChatBox from "../../components/chats/ChatBox"
import MyChats from "../../components/chats/myChats"
import SideDrawer from "../../components/chats/sidedrawer"
const ChatPage = ()=>{
    const {user}=ChatState()
    return<>
    <div className="w-full">
        {user && <SideDrawer/>}
        <div>
    {user && <MyChats/>}
    {user && <ChatBox/>}
        </div>
    </div>
    </>
}

export default ChatPage