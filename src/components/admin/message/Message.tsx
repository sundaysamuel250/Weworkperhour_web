import React from 'react'
import ChatDetails from './components/ChatDetails'
import ReplyForm from './components/ReplyForm'
import ChatBox from './components/ChatBox'

const Message: React.FC = () => {
  return (
    <div className="h-screen flex mt-[8rem]">
      <div className="w-full border-r border-[#2aa100] overflow-y-scroll">
        <ChatBox />
      </div>
      {/* <div className="flex-1 flex flex-col">
        <ChatDetails />
        <ReplyForm />
      </div> */}
    </div>
  )
}

export default Message