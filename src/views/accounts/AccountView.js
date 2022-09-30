import React, { useEffect, useState } from 'react';
import {
  Overview,
  AccountTxs,
  TokenBalance,
  TransferTxs,
  InternalTxs
} from './components';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import colors from 'src/vars/colors';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccountDetails,
  getTransactionsByAddresses
} from 'src/redux/actions';

// card
const TabContentWrapper = styled(TabContent)`
  width: 100%;
  height: 100%;
  min-height: 140px;
`;

const NavLinkExp = styled(NavLink)`
  font-family: GilroyBold;
  font-size: 12px;
  letter-spacing: 0.54px;
  padding: 0px 0px;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000000;
  background-color: #fff;
  padding-right: 20px;

  &.active {
    color: #d5da43 !important;
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    color: #d5da43 !important;
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    color: #40b1be;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 10px 0px;
  @media(max-width:768px){
    padding: 12px 14px;
  }
  `}
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 12px;

  .nav-tabs {
    border-bottom: unset;
  }
`;

const AccountView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { address } = params;
  const [activeTab, setActiveTab] = useState('1');

  const { details, detailsLoading, txs, txsLoading } = useSelector(
    (state) => state.addresses
  );

  let addressTxs = txs && txs.data.txs;
  let token = details && details.data?.value.coins;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const transferTxs =
    txs &&
    txs.data.txs?.filter(
      (item) => address === item.tx.value.msg[0].value.from_address
    );

  const internalTxs =
    txs &&
    txs.data.txs?.filter(
      (item) =>
        item.tx.value.msg[0].value.to_address ===
        item.tx.value.msg[0].value.from_address
    );

  useEffect(() => {
    dispatch(getAccountDetails(address));
    dispatch(getTransactionsByAddresses(address));
  }, [address, dispatch]);

  return (
    <Container>
      <Overview
        address={address}
        details={details}
        detailsLoading={detailsLoading}
        addressTxs={addressTxs}
      />
      <>
        <Container>
          <Wrapper>
            <Header>
              <Nav tabs>
                <NavItem>
                  <NavLinkExp
                    className={classNames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    Token Balances
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    className={classNames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    Transactions
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    className={classNames({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    Transfers
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    className={classNames({ active: activeTab === '4' })}
                    onClick={() => {
                      toggle('4');
                    }}>
                    Internal Txns
                  </NavLinkExp>
                </NavItem>
                {/* Will be used later👇 */}
                {/* <NavItem>
                  <NavLinkExp
                    disabled
                    className={classNames({ active: activeTab === '5' })}
                    onClick={() => {
                      toggle('5');
                    }}>
                    Votes
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    disabled
                    className={classNames({ active: activeTab === '6' })}
                    onClick={() => {
                      toggle('6');
                    }}>
                    Stake Details
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    disabled
                    className={classNames({ active: activeTab === '7' })}
                    onClick={() => {
                      toggle('7');
                    }}>
                    Contracts Published
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    disabled
                    className={classNames({ active: activeTab === '8' })}
                    onClick={() => {
                      toggle('8');
                    }}>
                    Analysis
                  </NavLinkExp>
                </NavItem>
                <NavItem>
                  <NavLinkExp
                    disabled
                    className={classNames({ active: activeTab === '9' })}
                    onClick={() => {
                      toggle('9');
                    }}>
                    Approval
                  </NavLinkExp>
                </NavItem> */}
              </Nav>
              <TabContentWrapper activeTab={activeTab}>
                <TabPane tabId="1">
                  <TokenBalance token={token} detailsLoading={detailsLoading} />
                </TabPane>
                <TabPane tabId="2">
                  <AccountTxs addressTxs={addressTxs} loading={txsLoading} />
                </TabPane>
                <TabPane tabId="3">
                  <TransferTxs transferTxs={transferTxs} loading={txsLoading} />
                </TabPane>
                <TabPane tabId="4">
                  <InternalTxs internalTxs={internalTxs} loading={txsLoading} />
                </TabPane>
              </TabContentWrapper>
            </Header>
          </Wrapper>
        </Container>
      </>
    </Container>
  );
};

export default AccountView;
