import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;

const Loader = (props) => {
  return (
    <LoaderWrapper height={props.height}>
      <Spinner color="#D5DA43" />
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  height: PropTypes.number.isRequired
};
Loader.defaultProps = {
  height: 10
};

export default Loader;
