import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Segoe UI", "Helvetica Neue", "Helvetica", "Lucida Grande", Arial, "Ubuntu", "Cantarell", "Fira Sans", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 13px;
  }

  *::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
    width: 6px !important;
    height: 6px !important;
  }

  *::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
  }

  *::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.08);
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`;

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <ChatList />
      <ChatRoom />
    </AppContainer>
  );
}
