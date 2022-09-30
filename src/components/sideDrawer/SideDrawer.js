import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
// import { pointer } from 'src/assets/fincoreassests';

const Wrapper = styled.div`
  height: calc(100% - 60px);
  background: #f1f2f2;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 60px;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  animation: mymove 0.5s;
  animation-timing-function: linear;
  @media (max-width: 320px) {
    margin-top: 12px;
  }
  @keyframes mymove {
    from {
      left: -200px;
    }
    to {
      left: 0px;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
`;
const ListItem = styled.li`
  display: flex;
  list-style: none;
  align-item: flex-start;
  justify-content: flex-start;
  line-height: 1.75;
  letter-spacing: 1.6px;
  text-align: left;
  font-family: GilroySemiBold;
  font-size: 20px;
  text-align: center;
  color: #24234d;
`;
const Privacy = styled(ListItem)`
  font-family: 'GilroyExtraBold';
  font-size: 10px;
  padding: 0;
`;
const Rights = styled(Privacy)`
  font-family: 'GilroySemiBold';
  opacity: 0.4;
`;
const activeClassName = 'nav-item-active';
const Links = styled(NavLink).attrs({ activeClassName })`
  color: #007fc1;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0px;
  transition: 0.3s ease;
  :hover {
    text-decoration: none;
    color: #007fc1;
  }
  &.${activeClassName} {
    border-left: 5px solid #d5da43;
  }
`;

const LinkdeActive = styled(NavLink).attrs({ activeClassName })`
  color: #007fc1;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0px;
  transition: 0.3s ease;
  :hover {
    text-decoration: none;
    color: #007fc1;
  }
`;

const FooterLink = styled(Link)`
  color: #007fc1;
  border-left: none;
`;
// const DropdownItemExp = styled(DropdownItem)``;
// const DropdownMenuExp = styled(DropdownMenu)``;
const Drop = styled(DropdownToggle)`
  font-family: GilroySemiBold;
  height: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  font-size: 14px;
  color: #24234d !important;
  text-transform: uppercase;
  letter-spacing: 0.69px;
`;

const DrawerFooter = styled.div`
  height: 230px;
`;
const DrawerFooterBody = styled.div`
  border-top: 1px solid #d2d2d2;
  height: 100%;
  margin: 0px 30px;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
// const Pointer = styled.span``;
// const PointerImg = styled.img`
//   width: 14px;
// `;
const SideDrawer = (props) => {
  const { pathname } = useLocation();
  // Below are ui related code commented used in sidedrawer on smaller screen, will be removed if not needed
  return (
    <Wrapper>
      <List>
        {pathname === '/' ? (
          <Links to={`/`}>
            <ListItem>Home</ListItem>
          </Links>
        ) : (
          <LinkdeActive to={`/`}>
            <ListItem>Home</ListItem>
          </LinkdeActive>
        )}

        {/* <Links to={`/txs`}>
          <ListItem>Blockchain </ListItem>
          <Pointer>
            <PointerImg src={pointer} />
          </Pointer>
        </Links> */}
        <Links to={`/blocks`}>
          <ListItem>Blocks</ListItem>
          {/* <Pointer>
            <PointerImg src={pointer} />
          </Pointer> */}
        </Links>

        <Links to={`/txs`}>
          <ListItem>Transaction</ListItem>
          {/* <Pointer>
            <PointerImg src={pointer} />
          </Pointer> */}
        </Links>

        {/* <Links to={`/blocks`}>
          <ListItem>Committee</ListItem>
          <Pointer>
            <PointerImg src={pointer} />
          </Pointer>
        </Links> */}
        {/* <Links to={`txs`}>
          <ListItem>More</ListItem>
          <Pointer>
            <PointerImg src={pointer} />
          </Pointer>
        </Links> */}
      </List>
      <DrawerFooter>
        <DrawerFooterBody>
          <UncontrolledDropdown>
            {/* <Drop nav caret>
              English/USA
            </Drop> */}
            <Drop nav>English</Drop>
            {/* <DropdownMenuExp right>
              <DropdownItemExp>Russian</DropdownItemExp>
              <DropdownItemExp>Chinese</DropdownItemExp>
              <DropdownItemExp>Italian</DropdownItemExp>
            </DropdownMenuExp> */}
          </UncontrolledDropdown>
          <FooterLink to={`/validator`}>
            <Privacy> PRIVACY POLICY</Privacy>
          </FooterLink>
          <FooterLink to={`/proposals`}>
            <Rights>© 2021 FINCOR. All rights reserved.</Rights>
          </FooterLink>
        </DrawerFooterBody>
      </DrawerFooter>
    </Wrapper>
  );
};

export default SideDrawer;
