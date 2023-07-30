// import styled from '@emotion/styled';

// export const ContactItem = styled.ul`
//   display: flex;
//   gap: 15px;
//   align-items: center;
//   border: 1px solid black;
//   border-radius: 5px;
//   padding: 2px;
//   padding-left: 5px;
//   width: 450px;
//   justify-content: space-between;
//   background-color: beige;
// `;

// export const BtnDel = styled.button`
//   width: 100px;
//   font-size: small;
//   padding: 5px 10px;
//   border-radius: 5px;
//   background-color: #e78972;
//   cursor: pointer;
// `;

import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 16px;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 60px;
  padding: 3px 5px;
  border: none;
  font-weight: 500;
  border-radius: 10px;

  &:hover {
    color: white;
    scale: 1.1;
    cursor: pointer;
    background-color: #234a5c;
    transition: background-color 200ms linear;
    transition: scale 200ms linear;
  }
`;
