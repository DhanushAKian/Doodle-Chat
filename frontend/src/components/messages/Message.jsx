import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../utils/extractTime.js';

const Message = ({message}) => {
const {authUser} =useAuthContext();
const {selectedConversation}=useConversation();
const fromMe = message.senderId=== authUser._id;
const chatClassName = fromMe?'chat-end':'chat-start';
const profilePic= fromMe? authUser.profilePic :selectedConversation?.profilePic;
const bubbleBgColor = fromMe? 'bg-black': "";
const formattedTime= extractTime(message.createdAt);


  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img 
        src={profilePic}
        alt="user avatar" 
        />

        </div>
      </div>
     <div className={`chat-bubble text-white bg-gray-500 ${bubbleBgColor}pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black font-bold">{formattedTime}</div>
    </div>
  )
}

export default Message
