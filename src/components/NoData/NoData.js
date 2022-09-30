import React from 'react';
import PropTypes from 'prop-types';
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

const Image = styled.img``;

const NoData = (props) => {
  return (
    <LoaderWrapper height={props.height}>
      <Image src={noData} height={props.imgHeight} />
      <Text>No record found</Text>
    </LoaderWrapper>
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
