import React from 'react';
import { withRouter } from 'react-router-dom';
import colors from 'src/vars/colors';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';
import DurationWrapper from './DurationWrapper/durationwrapper';

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
const TableCol = styled(TableCell)`
  // vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 200px;
`;
const TdMain = styled.div`
  display: flex;
`;
const FlexEnd = styled(TdMain)`
  justify-content: flex-end;
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
  // min-height: 33px;
  // justify-content: space-between;
`;
const LightTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  // justify-content: space-between;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.2;
  color: #24234d;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.4;
  font-size: 11px;
`;

const BoldText = styled.p`
  font-size: 14px;
  // max-width: 100px !important;
  font-family: 'GilroyBold';
  color: #24234d;
  // margin-bottom: 8px;
`;
const SemiBoldText = styled(BoldText)`
  font-size: 11px;
`;

const TokenTrackerTable = () => {
  return (
    <>
      <DurationWrapper
        hour="1 Hour"
        day="1 Day"
        week="1 Week"
        time="2021-05-27 20:00:00 ~ 2021-05-27 21:00:00 (Local)"
      />
      <Wrapper>
        <Table hover bordered>
          <TableBody>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the rewards given to the top 27 SRs and
                      the following 100 partners
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
            <TableRow>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Number</LightText>
                    </LightTextWrapper>
                    <SemiBoldText style={{ textAlign: 'center' }}>
                      1
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <TdMain>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Parameter</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>
                      Propose to modify the maintenance interval of SR
                    </SemiBoldText>
                  </BlockHeight>
                </TdMain>
              </TableCol>
              <TableCol>
                <FlexEnd>
                  <BlockHeight>
                    <LightTextWrapper>
                      <LightText>Current value</LightText>
                    </LightTextWrapper>
                    <SemiBoldText>6 Hour</SemiBoldText>
                  </BlockHeight>
                </FlexEnd>
              </TableCol>
            </TableRow>
          </TableBody>
        </Table>
      </Wrapper>
    </>
  );
};

export default withRouter(TokenTrackerTable);
