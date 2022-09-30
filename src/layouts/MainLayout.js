import React, { useState } from 'react';
import styled from 'styled-components';
import { NavBar, Footer } from 'src/components';
import { SideDrawer } from 'src/components/sideDrawer';
import { Backdrop } from 'src/components';
import { Banner } from 'src/views/landing/components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div``;

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [state, setState] = useState({
    sideDrawerOpen: false
  });

  const drawerToggleButtonHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let sideDrawer;
  let backdrop;

  if (state.sideDrawerOpen) {
    sideDrawer = <SideDrawer closeDrawerHandler={drawerToggleButtonHandler} />;
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <Wrapper>
      {sideDrawer}
      {backdrop}

      <NavBar
        isOpenSideDrawer={state.sideDrawerOpen}
        drawerClickHandler={drawerToggleButtonHandler}
      />
      {location.pathname !== '/not_found' ? <Banner /> : null}

      <Wrapper>{children}</Wrapper>
      {location.pathname !== '/not_found' ? <Footer /> : null}
    </Wrapper>
  );
};

export default MainLayout;
