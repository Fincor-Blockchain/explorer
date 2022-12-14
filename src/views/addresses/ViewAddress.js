import React, { useEffect } from 'react';
import { PageContainer } from 'src/components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { AddressInfo, TabsSection } from './components';
import { useDispatch } from 'react-redux';
import { getAccountDetails } from 'src/redux/actions';
import { Copy } from 'src/components';
import { withRouter } from 'react-router-dom';
const containerStyles = { paddingTop: 0, boxShadow: 'none' };

const SubHeading = styled.div`
  display: inline-block;
`;
const Icon = styled.h6`
  color: ${colors.black10Alpha};
  border: 1px solid ${colors.chipColor};
  background-color: ${colors.chipColor};
  font-family: PoppinsMedium;
  font-size: 12px;
  padding: 0px 15px;
  display: flex;
  line-height: 2;

  margin-bottom: 10px;
  width: auto;
  border-radius: 6px;
  @media (max-width: 576px) {
    width: auto !important;
    font-size: 2.5vw;
  }
`;
const ViewAddress = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountDetails(address));
  }, [props.match.params]);
  const { address } = props.match.params;

  return (
    <PageContainer bg="transparent" heading="Address" style={containerStyles}>
      <SubHeading>
        <Icon>
          {address}
          <Copy id="address-copy" value={address} />
        </Icon>
      </SubHeading>
      <AddressInfo />
      <TabsSection />
    </PageContainer>
  );
};

export default withRouter(ViewAddress);
