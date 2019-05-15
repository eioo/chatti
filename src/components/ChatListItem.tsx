import React from 'react';

import { Avatar, Container, Date, Icons, LastMessage, RoomName, UnreadCount } from './ChatListItem.styled';

export interface IChatData {
  id: number;
  name: string;
  lastMessage: string;
}

interface IChatListItemProps {
  active: boolean;
  chatData: IChatData;
  onClick: () => void;
}

export default function ChatListItem({
  chatData,
  onClick,
  active,
}: IChatListItemProps) {
  return (
    <Container active={active} onClick={onClick}>
      <Avatar>
        <img src={`https://picsum.photos/500/500?${Math.random()}`} />
      </Avatar>
      <RoomName>{chatData.name}</RoomName>
      <Date>Yesterday</Date>
      <LastMessage>Se oli mun suosikkssssi</LastMessage>
      <Icons>
        <UnreadCount>4</UnreadCount>
      </Icons>
    </Container>
  );
}
