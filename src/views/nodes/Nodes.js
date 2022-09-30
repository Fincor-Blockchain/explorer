import React from 'react';
import { ScreenTitle } from 'src/components';

import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import NodesRankingChart from './components/NodesRankingChart';
// in progress will be used later👇
// import { compose, withProps } from 'recompose';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from 'react-google-maps';
import MarkerLabel from './components/MarkerLabel';
// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;
const Wrapper = styled.div``;
const MapWrapper = styled.div`
  height: 100%;
  min-height: 600px;
  margin: 16px 0px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 6%), 0px 1px 3px rgb(0 0 0 / 10%);
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 23px 28px;
  // height: calc(100% - 16px);
  min-height: 70px;
  margin: 10px 0px;
  .rightAlign {
    text-align: right;
  }
  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CardHeading = styled.h1`
  font-family: 'GilroyBold';
  font-size: 18px;
  color: #111827;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
const LightText = styled(CardHeading)`
  opacity: 0.4;
  font-family: 'GilroyLight';
  font-size: 18px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

// card

const Accounts = () => {
  // in progress will be used later👇

  // Google Maps Component Starts from Here
  // const MyMapComponent = compose(
  //   withProps({
  //     googleMapURL:
  //       'https://maps.googleapis.com/maps/api/js?key=AIzaSyCx8Jr1WEhKED6AWY3GyCrUjUuhiFF7LK0&v=3.exp&libraries=geometry,drawing,places',
  //     loadingElement: <div style={{ height: `100%` }} />,
  //     containerElement: <div style={{ height: `600px` }} />,
  //     mapElement: <div style={{ height: `100%` }} />
  //   }),
  //   withScriptjs,
  //   withGoogleMap
  // )((props) => (
  //   <GoogleMap defaultZoom={2} defaultCenter={{ lat: 14.5994, lng: 28.6731 }}>
  //     {props.isMarkerShown && (
  //       <Marker position={{ lat: -34.397, lng: 150.644 }} />
  //     )}
  //   </GoogleMap>
  // ));
  // Google Maps Component End here
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Nodes" subTitle="Home/Nodes" />
          <Row>
            <Col lg="6">
              <Card>
                <Content>
                  <CardHeading>Nodes</CardHeading>
                  <LightText>1332</LightText>
                </Content>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Content>
                  <CardHeading>Most Nodes</CardHeading>
                  <LightText>United States</LightText>
                </Content>
              </Card>
            </Col>
          </Row>
        </TopWrapper>
      </Container>
      <Container>
        <MapWrapper>
          <Row>
            <Col lg="12">
              <MarkerLabel />
            </Col>
          </Row>
        </MapWrapper>
        {/* in progress will be used later👇 */}
        {/* <MapWrapper>
          <Row>
            <Col lg="12">
              <MyMapComponent isMarkerShown={false} />
            </Col>
          </Row>
        </MapWrapper> */}
        <Wrapper>
          <Row>
            <Col lg="12">
              <NodesRankingChart />
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Accounts;
