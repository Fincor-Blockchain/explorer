import React from 'react';
import { ScreenTitle } from 'src/components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import colors from 'src/vars/colors';
import { search } from 'src/assets/fincoreassests';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { VotesTable } from './components';
const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
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
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
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

const CardHeading = styled.h1`
  font-family: 'GilroyBold';
  font-size: 18px;
  margin: 4px 0px;
  color: #111827;
  // @media (max-width: 320px) {
  //   font-size: 14px;
  // }
`;
const LightText = styled(CardHeading)`
  font-family: 'GilroyMedium';
  opacity: 0.4;
  font-size: 11px;
  // margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
    font-size: 10px;
  }
`;

const ColoredText = styled.span`
  color: #bec323;
  font-family: 'GilroyMedium';
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 14px;
`;
const BadgeText = styled.p`
  color: #6ac367;
  font-size: 9px;
  background: rgba(67, 218, 73, 0.12);
  padding: 5px 10px;
  margin: 8px 13px;
  border-radius: 15px;
  font-family: 'GilroySemiBold';
`;

// card

const Votes = () => {
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Votes" subTitle="Home/Committee/Votes" />
        </TopWrapper>
        <>
          <Row>
            <Col lg="4">
              <Card>
                <FlexColumnWrapper>
                  <CardHeading>02:09:56</CardHeading>
                  <LightText>Next round</LightText>
                </FlexColumnWrapper>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <FlexColumnWrapper>
                  <CardHeading>28,949,359,251</CardHeading>
                  <LightText>Real-time total votes this round</LightText>
                </FlexColumnWrapper>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <FlexColumnWrapper>
                  <CardHeading>+16,454,351</CardHeading>
                  <LightText>
                    Most votes gained this round{' '}
                    <ColoredText>Sesameseeds</ColoredText>
                  </LightText>
                </FlexColumnWrapper>
              </Card>
            </Col>
          </Row>
        </>
        <Wrapper>
          <TableHeader>
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
            <BadgeText>Votes</BadgeText>
          </TableHeader>
          <VotesTable />
        </Wrapper>
      </Container>
    </>
  );
};

export default Votes;
