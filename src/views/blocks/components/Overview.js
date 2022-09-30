import React from 'react';
import { Loader, ScreenTitle } from 'src/components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import colors from 'src/vars/colors';
import { Confirmed } from 'src/assets/fincoreassests';
import { format } from 'timeago.js';
import { NoDataCard } from 'src/components/NoData';
// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const Wrapper = styled.div`
  padding: 23px 0px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 15px 0px;
  @media(max-width:768px){
    margin: 6px 0px;
  }
  `}
`;

const Content = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 12px 0px;
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
  font-size: 11px;
  margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
  }
`;

const ContentRow = styled.div`
  padding: 0px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
  :hover {
    background: #f3f4f6;
  }
`;
const CardTitle = styled.h1`
  font-size: 18px;
  font-family: GilroyBold;

  text-align: left;
`;

const HeadingCard = styled.div`
  padding: 8px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
`;

const Text = styled.div`
  font-family: GilroyRegular;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  color: #24234d;
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
`;

const Hash = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const ProsperAddress = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none !important;
  @media (max-width: 768px) {
    max-width: 140px;
  }
`;

const StatusIcon = styled.img`
  margin-right: 4px;
`;

const Blocks = (props) => {
  const { block, blockLoading } = props;

  return (
    <Container>
      <TopWrapper>
        <ScreenTitle title="Blocks Details" subTitle="Home/Blocks/Details" />
      </TopWrapper>
      <>
        <Row>
          <Col lg="6" style={{ height: 'fit-content' }}>
            <Wrapper>
              <HeadingCard>
                <CardTitle>Overview</CardTitle>
              </HeadingCard>
              {blockLoading ? (
                <Loader height={406} />
              ) : block && block == null ? (
                <NoDataCard height={406} imgHeight={55} />
              ) : (
                block &&
                !blockLoading && (
                  <>
                    <ContentRow>
                      <Content>
                        <LightText>
                          <i className="far fa-question-circle"></i> Block
                          Height:
                        </LightText>

                        <Text>{block.data.block.header.height}</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Block Hash:</LightText>

                        <Hash>{block.data.block_meta.block_id.hash}</Hash>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Time:</LightText>

                        <Text>
                          {format(block.data.block.header.time)} (
                          {new Date(block.data.block.header.time).toUTCString()}
                          )
                        </Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>produced by:</LightText>

                        <ProsperAddress>
                          {block.data.block.header.proposer_address}
                        </ProsperAddress>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Block size:</LightText>

                        <Text>-</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Status:</LightText>

                        <Text>
                          <StatusIcon src={Confirmed} />
                          Confirmed
                        </Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Confirmed SRs:</LightText>

                        <Text>0</Text>
                      </Content>
                    </ContentRow>
                  </>
                )
              )}
            </Wrapper>
          </Col>
          <Col lg="6" style={{ height: 'fit-content' }}>
            <Wrapper>
              <HeadingCard>
                <CardTitle>More</CardTitle>
              </HeadingCard>
              {blockLoading ? (
                <Loader height={406} />
              ) : block && block == null ? (
                <NoDataCard height={406} imgHeight={55} />
              ) : (
                block &&
                !blockLoading && (
                  <>
                    <ContentRow>
                      <Content>
                        <LightText>Tx Count:</LightText>

                        <Text>{block.data.block.header.num_txs}</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Transfer:</LightText>

                        <Text>-</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Consume resources:</LightText>

                        <Text>-</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Burned TRX:</LightText>

                        <Text>0</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Block Reward:</LightText>

                        <Text>{block.data.block.header.num_txs}</Text>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Parent block hash:</LightText>

                        <Hash>
                          {block.data.block.last_commit.block_id.hash}
                        </Hash>
                      </Content>
                    </ContentRow>
                    <ContentRow>
                      <Content>
                        <LightText>Version number:</LightText>

                        <Text>-</Text>
                      </Content>
                    </ContentRow>
                  </>
                )
              )}
            </Wrapper>
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default Blocks;
