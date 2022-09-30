import React, { useEffect, useState } from 'react';
import { ComingSoon, PageContainer, ScreenTitle } from 'src/components';
import { BlocksTable } from './components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { latestblock } from 'src/assets/fincoreassests';
import { getAllBlocks, getBlocksInfo } from 'src/redux/actions';
import history from '../../utils/history';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'src/components';
// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 23px 28px;
  // height: calc(100% - 16px);
  min-height: 70px;
  margin: 10px 0px;
  // :hover {
  //   box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.06), 0px 6px 8px rgba(0, 0, 0, 0.1);
  // }
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
  width: 100%;
  ${({ loading }) =>
    loading &&
    `position:relative;

&:before {
position: absolute;
content: '';
top: 0;
left: 0;
background: rgba(255,255,255,.8);
width: 100%;
height: 100%;
border-radius: .28571429rem;
z-index: 100;
}
&:after {
position: absolute;
content: '';
top: 50%;
left: 50%;
margin: -1.3em 0 0 -1.3em;
width: 2.5em;
height: 2.5em;
-webkit-animation: segment-spin .6s linear;
animation: segment-spin .6s linear;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
border-radius: 500rem;
border-color: #37063b rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
border-style: solid;
border-width: .2em;
-webkit-box-shadow: 0 0 0 1px transparent;
box-shadow: 0 0 0 1px transparent;
visibility: visible;
z-index: 101;
}
`};
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Body1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CardHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  @media (max-width: 320px) {
    align-items: center;
  }
`;
const HeadContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Icon = styled.img`
  margin-right: 6px;
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
  font-size: 11px;
  margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const SemiBoldText = styled(CardHeading)`
  font-family: 'GilroySemiBold';
  font-size: 14px;
  margin: 4px 0px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
const Light = styled.span`
  opacity: 0.4;
  font-size: 14px;
  font-family: 'GilroyLight';
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 16px 12px;
`;

const Blocks = (props) => {
  const dispatch = useDispatch();

  const { location } = props;
  const { page = 1, limit = 10 } = queryString.parse(location.search);
  const [state, setState] = useState({ limit: limit, currentPage: page - 1 });
  const { blocksInfo, blocksInfoLoading, allBlocks, allBlocksLoading } =
    useSelector((state) => state.blocks);

  let blocks = allBlocks && allBlocks.data.blocks;

  const pageHandler = (e, index) => {
    e.preventDefault();

    history.push(`/blocks?page=${index}`);

    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > allBlocks.data.total_count) {
      totalCount = allBlocks.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
    history.push(`/blocks?page=${currentPage}&&limit=${limit}`);
  };
  useEffect(() => {
    const { page = 1, limit = 10 } = queryString.parse(location.search);
    const filter = {
      page: page - 1,
      limit: limit
    };
    dispatch(getAllBlocks(filter));
    dispatch(getBlocksInfo());
  }, [page, limit, location, dispatch]);

  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Blocks" subTitle="Home/Blocks" />
        </TopWrapper>
        <>
          <Row>
            <Col lg="6">
              <Card>
                <Content loading={+blocksInfoLoading}>
                  <Body1>
                    <CardHead>
                      <HeadContent>
                        <Icon src={latestblock}></Icon>
                        <CardHeading>Number of Blocks</CardHeading>
                      </HeadContent>
                      {/* will be used later👇 */}
                      {/* <LightText className="rightAlign">
                        Updated 1 sec ago
                      </LightText> */}
                    </CardHead>
                    <TextWrapper>
                      <LightText>
                        Number of new blocks added yesterday
                      </LightText>
                      <LightText className="rightAlign">
                        Сumulative number of blocks
                      </LightText>
                    </TextWrapper>
                    <TextWrapper>
                      <SemiBoldText>
                        +{blocksInfo && blocksInfo.yesterdayCount}
                      </SemiBoldText>
                      <SemiBoldText className="rightAlign">
                        +{blocksInfo && blocksInfo.totalBlocks}
                      </SemiBoldText>
                    </TextWrapper>
                  </Body1>
                </Content>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <ComingSoon />
                <Content>
                  <Body1>
                    <CardHead>
                      <HeadContent>
                        <Icon src={latestblock}></Icon>
                        <CardHeading>Block Reward</CardHeading>
                      </HeadContent>
                      <LightText className="rightAlign">
                        Updated 1 sec ago
                      </LightText>
                    </CardHead>
                    <TextWrapper>
                      <LightText>Yesterday's new block revenue</LightText>
                      <LightText className="rightAlign">
                        Cumulative block revenue
                      </LightText>
                    </TextWrapper>
                    <TextWrapper>
                      <SemiBoldText>
                        458,960 TRX <Light>(≈34,221.235 USD)</Light>
                      </SemiBoldText>
                      <SemiBoldText className="rightAlign">
                        3.530317 B TRX <Light>(≈34,221.235 USD)</Light>
                      </SemiBoldText>
                    </TextWrapper>
                  </Body1>
                </Content>
              </Card>
            </Col>
          </Row>
        </>
      </Container>
      <PageContainer heading="Latest Blocks" src={latestblock}>
        <BlocksTable blocks={blocks} allBlocksLoading={allBlocksLoading} />
      </PageContainer>

      <Container>
        {blocks && blocks?.length >= 10 ? (
          <Footer>
            <Pagination
              pageHandler={pageHandler}
              changeLimit={changeLimit}
              count={allBlocks && allBlocks.data.total_count}
              limit={limit}
              currentPage={page - 1}
            />
          </Footer>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export default Blocks;
