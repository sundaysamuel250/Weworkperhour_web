import React from 'react'
import EmployerChatBox from './components/EmployerChatBox'

const EmployersMessage: React.FC = () => {
  return (
    <div className="h-screen flex mt-[8rem]">
    <div className="w-full overflow-y-scroll">
      <EmployerChatBox />
    </div>
  </div>
  )
}

export default EmployersMessage