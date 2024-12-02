import React, { useState, useRef } from 'react';
import { TextInput } from 'flowbite-react';
import {useSelector} from 'react-redux'
import botAvatar from '../resources/img/bot-mini.png';

export default function CallToAction() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const { currentUser } = useSelector((state) => state.user)
  const messagesContainerRef = useRef(null);
  const API_CHAT_URL = import.meta.env.VITE_API_CHAT_URL;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000000); // Generate a random number from 0 to 9999999
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const userMessage = input;
      setInput('');
      addMessage('user', userMessage);
  
      // If there's no conversationId, create a new one
      let newConversationId;
      if (!conversationId) {
        newConversationId = generateRandomId();
        console.log('Generated New Conversation ID:', newConversationId);
        setConversationId(newConversationId);
      }
  
      // Call sendMessage with conversationId
      await sendMessage(userMessage, conversationId || newConversationId);
    }
  };

  const addMessage = (sender, content) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender, content },
    ]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  const formatBotResponse = (response) => {
    // Loại bỏ dấu nháy kép
    let formattedResponse = response.replace(/"/g, '');
  
    // Loại bỏ các ký tự nhấn mạnh (ví dụ: * và _)
    formattedResponse = formattedResponse.replace(/[*_]/g, '');
  
    return formattedResponse;
  };
  
  const sendMessage = async (userMessage, conversationId) => {
    const response = await fetch(API_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage, conversation_id: String(conversationId) }),
    });
    console.log(response.body);
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let botResponse = '';
  
    addMessage('bot', 'Typing...');
  
    const processResult = async () => {
      const { done, value } = await reader.read();
      if (done) return;
  
      const token = decoder.decode(value);
      botResponse += token;
  
      // Định dạng lại câu trả lời của bot
      const formattedResponse = formatBotResponse(botResponse);
  
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          sender: 'bot',
          content: formattedResponse,
        };
        return updatedMessages;
      });
  
      scrollToBottom();
      processResult(); // Continue reading
    };
  
    processResult();
  };

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="bg-white rounded-lg p-5 w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Blog Plants CHATBOT</h1>
        <div
          ref={messagesContainerRef}
          className="h-64 overflow-y-auto rounded-lg p-2"
        >
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start mb-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {/* Bot avatar on the left */}
              {message.sender === 'bot' && (
                <img
                  src={botAvatar}
                  className="w-8 h-8 rounded-full mr-2"
                  alt={`${message.sender} avatar`}
                />
              )}
              {/* Message content */}
              <span className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-gradient-to-r from-teal-500 to-lime-500 text-white' : 'bg-gray-200 text-black text-left'}`}>
                {message.content}
              </span>
              {/* User avatar on the right */}
              {message.sender === 'user' && (
                <img
                  src={currentUser.profilePicture}
                  className="w-8 h-8 rounded-full ml-2" // Add margin-left for spacing
                  alt={`${message.sender} avatar`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex">
          <TextInput
            id="input"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Say something..."
            rows={1}
            className="rounded-r-lg p-2 w-full resize-none"
          />
        </div>
      </div>
    </div>
  );
}