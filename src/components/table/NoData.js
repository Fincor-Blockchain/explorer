import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableRow } from '../table';
import styled from 'styled-components';
import { noData } from 'src/assets/images';
import colors from 'src/vars/colors';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;
const Text = styled.p`
  font-family: PoppinsRegular;
  font-size: 14px;
  text-align: center;
  color: ${colors.primary};
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

const Image = styled.img``;

const NoData = (props) => {
  return (
    <TableBody style={{ minHeight: 'unset' }}>
      <TableRow {...props}>
        <TableCell colSpan={props.colSpan}>
          <LoaderWrapper height={props.height}>
            <Image src={noData} height={props.imgHeight} />
            <Text>No record found</Text>
          </LoaderWrapper>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

NoData.propTypes = {
  height: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired
};
NoData.defaultProps = {
  height: 10,
  colSpan: 3
};

export default NoData;
