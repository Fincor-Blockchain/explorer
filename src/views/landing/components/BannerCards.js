import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CustCard } from 'src/components';
import { arrowright } from 'src/assets/fincoreassests';
import { Container, Collapse } from 'reactstrap';
import { useSelector } from 'react-redux';
const BannerCardsWrapper = styled.div`
  position: relative;
`;
const BannerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
`;
const Text = styled.p`
  font-family: GilroyMedium;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;
const Icon = styled.img`
  margin: 4px;
  width: 20px;
  height: 20px;
  transition: all 0.4s ease;
  :hover{
    transform: rotateZ(90deg); 
  }
}
`;
const VerticalIcon = styled.img`
  margin: 4px;
  width: 20px;
  height: 20px;
  transform: rotateZ(-90deg);
`;
const MainWrapper = styled.div`
  margin-top: -93px;
  @media (max-width: 768px) {
    margin-top: -228px;
  }
`;

const CollapseData = styled(Collapse)`
  display: flex;
  flex-wrap: wrap;
`;

function BannerCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [r1, setR1] = useState(null);
  const [r2, setR2] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const {
    blockHeaderData
    //  blockHeaderDataLoading
  } = useSelector((state) => state.socket);

  const b = blockHeaderData;

  useEffect(() => {
    if (blockHeaderData?.length >= 8 && blockHeaderData?.length === 12) {
      setR1(b.splice(0, 8));

      setR2(b);
    } else {
      setR1(b);
    }
  }, [b, blockHeaderData]);

  return (
    <MainWrapper>
      <Container fluid="xl">
        <BannerCardsWrapper>
          <MoreWrapper onClick={toggle}>
            <Text>{isOpen ? 'Collapse' : 'Expand'}</Text>
            {isOpen ? (
              <VerticalIcon src={arrowright} alt="arrow right" />
            ) : (
              <Icon src={arrowright} alt="arrow right" />
            )}
          </MoreWrapper>
          {/* loading={+blockHeaderDataLoading} */}
          <BannerCards>
            {r1 &&
              r1?.map((item, index) => (
                <CustCard
                  key={index}
                  title={item.block.header.height}
                  text="Number Of Blocks"
                />
              ))}

            <CollapseData isOpen={isOpen}>
              {r2 &&
                r2?.map((item, index) => (
                  <CustCard
                    key={index}
                    title={item.block.header.height}
                    text="Number Of Blocks"
                  />
                ))}
            </CollapseData>
          </BannerCards>
        </BannerCardsWrapper>
      </Container>
    </MainWrapper>
  );
}

export default BannerCard;
