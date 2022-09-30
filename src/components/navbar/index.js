import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Container,
  NavItem,
  UncontrolledDropdown,
  // DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import fincorelogo from 'src/assets/fincoreassests/Fincormainlogo.png';
import { thunder } from 'src/assets/fincoreassests';

import { burger, crossed } from 'src/assets/fincoreassests';
import styled from 'styled-components';

const NavbarExp = styled(Navbar)`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0px;
  box-shadow: 0px 11px 17px rgb(0 0 0 / 5%);
  padding: 0.5rem 1rem;
  padding-bottom: 0px;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
`;
const RightNav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    display: flex;
    // width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const LogInButton = styled(Button)`
  color: #24234d;
  font-family: 'GilroySemiBold';
  border: none;
  border-radius: 7px;
  background-color: #d5da43;
  transition: all 0.2s ease-out;
  @media (max-width: 576px) {
    font-size: 12px;
  }
  &:hover {
    color: #24234d;
    background-color: #d5da43;
  }
  &:active {
    color: #24234d !important;
    background-color: #d5da43 !important;
  }
  &:focus {
    outline: 0;
    box-shadow: none !important;
    color: #24234d;
    background-color: #d5da43;
  }
`;

const RegisterButton = styled(LogInButton)`
  background-color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0;
  padding-right: 0;
  transition: all 0.2s ease-out;
  @media (max-width: 576px) {
    font-size: 12px;
    margin-left: 3px;
    margin-right: 3px;
  }
  &:active {
    color: #24234d !important;
    background-color: #fff !important;
  }
  &:hover {
    color: #24234d;
    background-color: #ffffff;
  }
  &:focus {
    color: #24234d;
    background-color: #fff;
  }
`;
const ConnecWalletButton = styled(RegisterButton)`
  margin-left: 3px;
  margin-right: 20px;

  @media (max-width: 576px) {
    font-size: 12px;
    margin-left: 1px;
    margin-right: 1px;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  @media (max-width: 576px) {
    width: 13px;
  }
`;
// Do not remove VerticalLine , may be used later
// const VerticalLine = styled.span`
//   height: 29px;
//   border: 0.5px solid black;
//   opacity: 0.1;
//   display: inline-block;
//   vertical-align: middle;
//   color: #f3f4f6;
//   margin: 8px 10px;
//   @media (max-width: 576px) {
//     margin: 0px 2px;
//   }
// `;
const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-family: GilroySemiBold;

  font-size: 14px;
  color: #24234d;
  letter-spacing: 0.69px;

  // &.${activeClassName} {
  //   border-bottom: 4px solid #d5da43;
  // }
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 10px;
  margin-top: 4px;
  :hover {
    color: #24234d;
    text-decoration: none;
  }
`;
const StyledLinks = styled(NavLink).attrs({ activeClassName })`
  font-family: GilroySemiBold;
  font-size: 14px;
  color: #24234d;
  letter-spacing: 0.69px;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  padding: 17px 10px;
  // margin-top: 2px;
  :hover {
    color: #24234d;
    text-decoration: none;
  }
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: ' ';
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    background: #d5da43;
    transition: width 0.4s ease 0s, left 0.4s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;
const NavItems = styled(NavItem)`
  // margin: 0px 10px;
  margin: 0px 5px;
  height: 100%;
  display: flex;
  align-self: center;
  // @media (max-width: 992px) {
  //   margin: 0px 5px;
  // }
`;
const NavExp = styled(Nav)`
  min-width: 600px;
  // justify-content: space-between;
  justify-content: center;
  dislay: flex;
  flex-wrap: wrap;

  // height: 57px!important;
  align-items: center !important;
  @media (max-width: 992px) {
    display: none;
  }
`;
const NavText = styled(NavbarText)``;

const NavLogo = styled(NavbarBrand)`
  padding: 0 !important;
  display: flex;
  margin: 0 !important;
`;
const Logo = styled.img`
  @media (max-width: 576px) {
    width: 54px;
  }
`;
// const Drop = styled(DropdownToggle)`
//   font-family: GilroySemiBold;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   color: #24234d !important;
//   text-transform: uppercase;
//   letter-spacing: 0.69px;
// `;

const DropdownMenuExp = styled(DropdownMenu)`
  background-color: #ffffff;
  width: 100%;
  max-width: 168px;
  padding: 8px 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  border: solid 1px #f3f4f6;
  top: 50px;

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 42%;
    bottom: -24px;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: red;
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(213, 62, 158, 0);
    border-bottom-color: #ffffff;
    border-width: 12px;
    margin-left: -12px;
  }
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    left: 50%;
    bottom: -28px;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: #777777;
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(79, 246, 146, 0);
    border-bottom-color: #f3f4f6;
    border-width: 14px;
    margin-left: -14px;
  }
`;

const DropdownItemLink = styled(NavLink)`
  text-decoration: none !important;
`;

const DropdownItemExp = styled(DropdownItem)`
  font-family: 'GilroySemiBold';
  font-stretch: normal;
  text-align: left;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  font-size: 14px;
  padding: 0;
  transition: all 0.2s ease-out;
  :hover {
    background-color: #ffffff;
    color: #d5da43 !important;
  }
`;

const MobileResponsive = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    width: 78px;
  }
`;
const ImgWrapper = styled.img`
  display: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
  width: 26px;
  transition: all 0.2s ease-out;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    width: 18px;
  }
`;

const NavBar = (props) => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Container fluid>
        <NavbarExp fixed="top" light expand="md">
          <MobileResponsive>
            {props.isOpenSideDrawer ? (
              <ImgWrapper
                src={crossed}
                onClick={props.drawerClickHandler}
                alt="crossed"
              />
            ) : (
              <ImgWrapper
                src={burger}
                onClick={props.drawerClickHandler}
                alt="icon"
              />
            )}
            <NavLogo href="/">
              <Logo src={fincorelogo} className="app-logo" alt="Fincor Logo" />
            </NavLogo>
          </MobileResponsive>
          <NavExp navbar expand="md">
            <NavItems>
              <>
                {pathname === '/' ? (
                  <StyledLink
                    to="/"
                    activeStyle={
                      pathname === '/' && {
                        borderBottom: '4px solid #d5da43'
                      }
                    }>
                    Home
                  </StyledLink>
                ) : (
                  <StyledLinks to="/">Home</StyledLinks>
                )}
              </>
            </NavItems>

            <NavItems>
              <>
                {pathname === '/blocks' ? (
                  <StyledLink
                    to="/blocks"
                    activeStyle={
                      pathname === '/blocks' && {
                        borderBottom: '4px solid #d5da43'
                      }
                    }>
                    Blocks
                  </StyledLink>
                ) : (
                  <StyledLinks to="/blocks">Blocks</StyledLinks>
                )}
              </>
            </NavItems>

            <NavItems>
              <>
                {pathname === '/txs' ? (
                  <StyledLink
                    to="/txs"
                    activeStyle={
                      pathname === '/txs' && {
                        borderBottom: '4px solid #d5da43'
                      }
                    }>
                    Transactions
                  </StyledLink>
                ) : (
                  <StyledLinks to="/txs">Transactions</StyledLinks>
                )}
              </>
            </NavItems>
            <UncontrolledDropdown nav inNavbar>
              {/* <Drop nav caret>
                Blockchain
              </Drop> */}
              <DropdownMenuExp className="dropdown-menu1">
                <DropdownItemLink to="/blocks">
                  <DropdownItemExp>Blocks</DropdownItemExp>
                </DropdownItemLink>
                {/* <DropdownItemLink to="#">
                  <DropdownItemExp disabled>Accounts</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="#">
                  <DropdownItemExp disabled>Nodes</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="#">
                  <DropdownItemExp disabled>Contracts</DropdownItemExp>
                </DropdownItemLink> */}
                <DropdownItemLink to="/txs">
                  <DropdownItemExp>Transactions</DropdownItemExp>
                </DropdownItemLink>
              </DropdownMenuExp>
            </UncontrolledDropdown>
            {/* <UncontrolledDropdown nav inNavbar disabled>
              <Drop nav caret>
                Tokens
              </Drop>
              <DropdownMenuExp>
                <DropdownItemLink to="/tokentracker">
                  <DropdownItemExp>Token Tracker</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/nodes">
                  <DropdownItemExp>Nodes</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/transactions">
                  <DropdownItemExp>Transactions</DropdownItemExp>
                </DropdownItemLink>
              </DropdownMenuExp>
            </UncontrolledDropdown> */}
            {/* <UncontrolledDropdown nav inNavbar disabled>
              <Drop nav caret>
                Data
              </Drop>
              <DropdownMenuExp>
                <DropdownItemLink to="/charts">
                  <DropdownItemExp>Charts</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/foundationaddresses">
                  <DropdownItemExp>Foundation Address</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/topstatistics">
                  <DropdownItemExp>Top Statistics</DropdownItemExp>
                </DropdownItemLink>
              </DropdownMenuExp>
            </UncontrolledDropdown> */}

            {/* <UncontrolledDropdown nav inNavbar disabled>
              <Drop nav caret>
                Committee
              </Drop>
              <DropdownMenuExp>
                <DropdownItemLink to="/proposals">
                  <DropdownItemExp>Proposals</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/representatives">
                  <DropdownItemExp>Representatives</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/votes">
                  <DropdownItemExp>Votes</DropdownItemExp>
                </DropdownItemLink>
              </DropdownMenuExp>
            </UncontrolledDropdown> */}
            {/* <UncontrolledDropdown nav inNavbar disabled>
              <Drop nav caret>
                More
              </Drop>
              <DropdownMenuExp className="dropdown-menu1">
                <DropdownItemLink to="/fincorapi">
                  <DropdownItemExp>Fincor API</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/newuserguide">
                  <DropdownItemExp>New User Guide</DropdownItemExp>
                </DropdownItemLink>
                <DropdownItemLink to="/faq">
                  <DropdownItemExp>FAQ</DropdownItemExp>
                </DropdownItemLink>
              </DropdownMenuExp>
            </UncontrolledDropdown> */}
          </NavExp>
          <RightNav>
            <NavText>
              <Icon src={thunder} alt="icon" />
              <ConnecWalletButton type="button">
                Connect Wallet
              </ConnecWalletButton>
            </NavText>
            {/* Auth buttons below will be used later */}
            {/* <VerticalLine /> */}
            {/* <NavText>
              <RegisterButton type="button">Register</RegisterButton>
            </NavText>
            <NavText>
              <LogInButton type="button">Log-In</LogInButton>
            </NavText> */}
          </RightNav>
        </NavbarExp>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
