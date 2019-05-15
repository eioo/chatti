import React from 'react';
import styled from 'styled-components';

import ChatList from './ChatList';

const SidebarStyle = styled.div`
  height: 100vh;
`;

export default function Sidebar() {
  return (
    <SidebarStyle>
      <ChatList />
    </SidebarStyle>
  );
}
