// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';
import '../../App.css';

const Home = () => {
  return (
    <div className='mobile flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding'>
      <Sidebar/> 
      <MessageContainer/>    
    </div>
  )
}

export default Home;
