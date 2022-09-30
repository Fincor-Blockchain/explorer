import React from 'react';
import styled from 'styled-components';

const Col = styled.td`
  font-family: GilroyRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  border-top: none !important;
  border-bottom: 1px solid #dee2e6;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:first-child {
    padding-left: 0px !important;
  }
`;

const TableCell = (props) => {
  return <Col {...props}>{props.children}</Col>;
};

export default TableCell;
