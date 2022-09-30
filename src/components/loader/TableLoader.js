import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableBody } from '../table';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;

const TableCell = styled.td`
  font-family: GilroyRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  border-top: none !important;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:first-child {
    padding-left: 0px !important;
  }
`;

const TableLoader = (props) => {
  return (
    <TableBody>
      <TableRow {...props}>
        <TableCell colSpan={props.colSpan}>
          <LoaderWrapper height={props.height}>
            <Spinner color="#D5DA43" />
          </LoaderWrapper>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

TableLoader.propTypes = {
  height: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired
};
TableLoader.defaultProps = {
  height: 10,
  colSpan: 3
};

export default TableLoader;
