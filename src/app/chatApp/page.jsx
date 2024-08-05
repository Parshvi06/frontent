'use client';
import React, { useState } from 'react';

const ChatApp = () => {
  const [chatList, setChatList] = useState([]);

  const addChat = (e) => {
    if (e.code === 'Enter' && e.target.value.trim() !== '') {
      const newChat = {
        text: e.target.value,
        completed: false,
        added: new Date(),
        avatar: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80',
        sender: 'AZ',
        status: 'Sent'
      };
      setChatList((prevChatList) => [newChat, ...prevChatList]);
      e.target.value = '';
    }
  };

  const deleteChat = (index) => {
    setChatList((prevChatList) => prevChatList.filter((_, i) => i !== index));
  };

  const toggleCompleted = (index) => {
    setChatList((prevChatList) =>
      prevChatList.map((chat, i) =>
        i === index ? { ...chat, completed: !chat.completed } : chat
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <div className="border shadow rounded-3xl">
        <div className="p-6">
          <ul className="space-y-5">
            {chatList.map((chat, index) => (
              <li key={index} className={`flex ${chat.completed ? 'me-11' : 'ms-auto'} gap-x-2 sm:gap-x-4`}>
                {chat.completed ? (
                  <img className="inline-block size-9 rounded-full" src={chat.avatar} alt="Avatar" />
                ) : null}
                <div className={`${chat.completed ? '' : 'grow text-end space-y-3'}`}>
                  <div className="inline-flex flex-col justify-end">
                    <div className={`inline-block ${chat.completed ? 'bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700' : 'bg-blue-600'} rounded-2xl p-4 shadow-sm`}>
                      <p className={`text-sm ${chat.completed ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
                        {chat.text}
                      </p>
                    </div>
                    <span className={`mt-1.5 ${chat.completed ? 'flex' : 'ms-auto flex'} items-center gap-x-1 text-xs text-${chat.completed ? 'red-500' : 'gray-500 dark:text-neutral-500'}`}>
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {chat.completed ? (
                          <>
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </>
                        ) : (
                          <>
                            <path d="M18 6 7 17l-5-5"></path>
                            <path d="m22 10-7.5 7.5L13 16"></path>
                          </>
                        )}
                      </svg>
                      {chat.status}
                    </span>
                  </div>
                </div>
                {chat.completed ? null : (
                  <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">{chat.sender}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-b-2">
          <input
            onKeyDown={addChat}
            placeholder="New Chat"
            type="text"
            className="w-full p-3 bg-gray-300 rounded-xl outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
