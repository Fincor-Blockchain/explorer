import React from 'react';
import styled from 'styled-components';

const Body = styled.tbody`
  height: 100%;
  min-height: 350px;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const TableBody = (props) => {
  return <Body {...props}>{props.children}</Body>;
};

export default TableBody;
