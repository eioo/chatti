import console = require('console');
import React, { useState } from 'react';
import styled from 'styled-components';

import ChatListItem, { IChatData } from './ChatListItem';

const List = styled.div`
  display: grid;
  grid-auto-rows: 70px;
  border-right: 1px solid #e6e6e6;
  overflow: hidden auto;
  height: 100vh;
`;

export default function ChatList() {
  const [activeChatId, setActiveChatId] = useState(-1);

  const chats: IChatData[] = [
    {
      id: 1,
      name: 'Alphamales v1',
      lastMessage: 'Ebin 😀',
    },
    {
      id: 2,
      name: 'Alphamales v2',
      lastMessage: 'Ebin 😀',
    },
    {
      id: 3,
      name: 'Alphamales v3',
      lastMessage: 'Ebin 😀',
    },
    {
      id: 4,
      name: 'Alphamales v4',
      lastMessage: 'Ebin 😀',
    },
    {
      id: 5,
      name: 'Alphamales v5',
      lastMessage: 'Ebin 😀',
    },
  ];

  const handleChatSelect = (chatId: number) => {
    setActiveChatId(chatId);
    console.log(chatId);
  };

  return (
    <List>
      {chats.map((chat: IChatData) => (
        <ChatListItem
          key={chat.id}
          active={chat.id === activeChatId}
          chatData={chat}
          onClick={() => handleChatSelect(chat.id)}
        />
      ))}
    </List>
  );
}
