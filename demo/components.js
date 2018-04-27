import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Element = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: #bebebe;
`;

export const Selectable = Element.extend`
  ${props => (
    props.selected ?
      css`
        background: rgb(205, 217, 85);
        color: black;
      ` :
      css`
        background: rgb(111, 112, 103);
        &:hover{
          background: rgb(205, 207, 191);
          color: black;
        }
      `
  )}
`;

export const NonSelectable = Element.extend`
  background: rgb(217, 85, 85);
`;

export const Result = styled.div`
  margin: 0 10%;
`;
