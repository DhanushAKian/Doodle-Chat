import React from 'react';
import { useSelector } from 'react-redux';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-black' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black font-bold">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
