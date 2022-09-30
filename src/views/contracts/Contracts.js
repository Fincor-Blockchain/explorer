import React, { useState } from 'react';
import { ContractsTable } from './components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { Container } from 'reactstrap';
import { search } from 'src/assets/fincoreassests';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import classnames from 'classnames';
import { ScreenTitle } from 'src/components';

const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ul.nav.nav-tabs {
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
  }
  .nav-tabs .nav-link {
    font-family: 'GilroyBold';
    margin-bottom: 0px;
    color: #24234d;
    font-size: 18px;
    border: none;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #d5da43;
    background-color: #fff;
    border: none;
  }
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 10px 0px;
  margin-bottom: 70px;
  @media(max-width:768px){
    padding: 12px 14px;
  }
  `}
`;
// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 30px;
  width: 30%;
  .input-group {
    border-radius: 7px;
    border: none;
  }
  .form-control {
    font-family: 'GilroyMedium';
    font-size: 11px;
    color: #24234d;
    opacity: 0.6;
    border-radius: 7px;
    border: 1px solid #dde0e7;
  }
  .form-control:focus {
    color: #24234d;
    opacity: 0.6;
    background-color: #fff;
    border-color: #dde0e7;
    outline: 0;
    box-shadow: none;
  }

  .btn {
    border-radius: 0;
  }
  .btn-secondary {
    color: #fff;
    background-color: #d5da43;
    border-color: #d5da43;
    border-radius: 0px 7px 7px 0px;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #d5da43;
    border-color: #d5da43;
    box-shadow: none;
  }
  .btn-secondary:focus {
    color: #fff;
    background-color: #d5da43;
    border-color: #d5da43;
    box-shadow: none;
  }
`;
const TabItems = styled.div`
  display: flex;
`;
const SearchInput = styled(Input)`
  height: 30px;
`;
const InputAddon = styled(InputGroupAddon)`
  height: 30px;
`;
const SearchButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Contracts = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Contracts" subTitle="Home/Contracts" />
        </TopWrapper>
        <>
          <Wrapper>
            <Nav tabs>
              <TabItems>
                <NavItem>
                  <NavLink
                    style={{ paddingLeft: '0px' }}
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    Verified Contracts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    All Contracts
                  </NavLink>
                </NavItem>
              </TabItems>
              <SearchDiv>
                <InputGroup>
                  <SearchInput placeholder="Search by Address/Contract name" />
                  <InputAddon addonType="append">
                    <SearchButton>
                      <SearchIcon src={search} alt="search-logo" />
                    </SearchButton>
                  </InputAddon>
                </InputGroup>
              </SearchDiv>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ContractsTable />
              </TabPane>
              <TabPane tabId="2">
                <ContractsTable />
              </TabPane>
            </TabContent>
          </Wrapper>
        </>
      </Container>
    </>
  );
};

export default Contracts;
