import React from 'react'
import ChatBox from './components/ChatBox'

const Message: React.FC = () => {
  return (
    <div className="h-screen flex mt-[8rem]">
      <div className="w-full overflow-y-scroll">
        <ChatBox />
      </div>
    </div>
  )
}

export default Message