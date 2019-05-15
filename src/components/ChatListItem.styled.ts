import styled, { css } from 'styled-components';

interface IContainerProps {
  active: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'avatar room-name room-name date' 'avatar last-message last-message icons';
  row-gap: 6px;
  width: calc(100% - 20px);
  padding: 0px 10px;
  user-select: none;
  background: ${(p: IContainerProps) => (p.active ? '#ececec' : 'white')};

  &:hover {
    background: ${(p: IContainerProps) => (p.active ? '#ececec' : '#f7f7f7')};
  }
`;

export const Avatar = styled.div`
  grid-area: avatar;
  align-self: center;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

export const DottedText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RoomName = styled.div`
  ${DottedText}
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  grid-area: room-name;
  font-weight: 500;
  font-size: 13px;
  align-self: flex-end;
`;

export const LastMessage = styled.div`
  ${DottedText}
  grid-area: last-message;
  align-self: flex-start;
`;

export const Date = styled.div`
  grid-area: date;
  align-self: flex-end;
  justify-self: flex-end;
  font-size: 12px;
  color: #9d9d9d;
`;

export const Icons = styled.div`
  grid-area: icons;
  align-self: flex-start;
  justify-self: flex-end;
`;

export const UnreadCount = styled.div`
  background: #ae5eff;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  padding: 1px 5px 1px 5px;
`;
