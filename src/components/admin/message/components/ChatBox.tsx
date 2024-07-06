import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  date: string;
}

interface ChatUser {
  id: number;
  name: string;
  profileImage: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [chatUsers, setChatUsers] = useState<ChatUser[]>([
    { id: 1, name: 'Alice', profileImage: '/images/alice.png' },
    { id: 2, name: 'Bob', profileImage: '/images/bob.png' },
  ]);
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const message: Message = {
        id: messages.length + 1,
        text: `File uploaded: ${files[0].name}`,
        sender: 'user',
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setMessages([...messages, message]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getLastMessage = (userId: number) => {
    const userMessages = messages.filter((msg) => msg.sender === 'user' && msg.id === userId);
    return userMessages.length > 0 ? userMessages[userMessages.length - 1] : null;
  };

  return (
    <div className="flex w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
      {/* Chat List Section */}
      <div className="w-1/4 border-r-2 p-4">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <ul>
          {chatUsers.map((user) => {
            const lastMessage = getLastMessage(user.id);
            return (
              <li
                key={user.id}
                className={`p-2 cursor-pointer ${selectedUser?.id === user.id ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setSelectedUser(user)}
              >
                <div className="flex items-center">
                  <img
                    src={user.profileImage}
                    alt={`${user.name}'s profile`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div>{user.name}</div>
                    {lastMessage && (
                      <div className="text-xs text-gray-500">
                        {lastMessage.date}: {lastMessage.text.length > 20 ? `${lastMessage.text.substring(0, 20)}...` : lastMessage.text}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Chat Box Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto mb-4 p-4">
          {selectedUser ? (
            <>
              {messages.map((message) => (
                <div key={message.id} className={`p-2 my-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
                  <div>{message.date}</div>
                  <div>{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </>
          ) : (
            <div className="text-center text-gray-500">Select a chat to start messaging</div>
          )}
        </div>
        {selectedUser && (
          <div className="flex items-center p-4 border-t-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Type your message..."
            />
            <input
              type="file"
              onChange={handleFileUpload}
              className="ml-2 p-2"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
