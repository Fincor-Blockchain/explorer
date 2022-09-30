import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { guide1, guide2, guide3 } from 'src/assets/fincoreassests';
import { ScreenTitle } from 'src/components';

// card
const TopWrapper = styled.div`
  // height: 100%;
  // min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -190px;
  height: 250px;
`;

const MainTitle = styled.p`
  font-size: 18px;
  font-family: 'GilroyBold';
  color: #111827;
  // margin-bottom: 16px;
`;
const SemiBoldText = styled(MainTitle)`
  font-size: 14px;
`;
const ContentTitle = styled(SemiBoldText)`
  margin-bottom: 6px;
  margin-right: 4px;
  font-size: 12px;
`;
const Text = styled.p`
  opacity: 0.4;
  font-size: 12px;
  font-family: 'GilroyMedium';
  line-height: 1.4;
  margin-bottom: 3px;
`;

const TextWrapper = styled.div`
  // padding: 10px 28px;
`;
const Content = styled.div`
  margin: 16px 0px;
`;
const Steps = styled(Content)`
  display: flex;
  align-items: center;
`;
const GuideImg = styled.img`
  width: 100%;
`;

const NewUserGuide = () => {
  const data = [
    {
      id: 0,
      maintitle: 'Is there a hardware wallet that supports TRON',
      contenttitle: '1. Token name and symbol:',
      text1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 1,
      contenttitle: '2. Token description:',
      text1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 2,
      contenttitle3: '3. Token supply:',
      text1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 3,
      contenttitle: '4. Token decimals:',
      text1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text2:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text3:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 4,

      contenttitle: '5. Token logo:',

      text1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 5,
      contenttitle: '6. Token issue:',
      text1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    }
  ];

  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle
            title="New User Guide"
            subTitle="Home/More/New User Guide"
          />
        </TopWrapper>
        {data.map((item, i) => (
          <TextWrapper key={i}>
            <MainTitle>{item.maintitle}</MainTitle>
            <Content>
              <ContentTitle>{item.contenttitle}</ContentTitle>
              {item.text1 && <Text>{item.text1}</Text>}
              {item.text2 && <Text>{item.text2}</Text>}
              {item.text3 && <Text>{item.text3}</Text>}
            </Content>
          </TextWrapper>
        ))}
        <Text>
          With multi signature, Token name and symbols cannot be modified once
          issued. please be mindful when you enter them, With multi signature,
          Token name and symbols cannot be modified once issued. please be
          mindful when you enter them.
        </Text>
        <Steps>
          <ContentTitle>Step 1:</ContentTitle>
          <Text>
            Open TRONSCAN click, sign in on top right, it is recommended that
            you sign in via Tron Link
          </Text>
        </Steps>
        <GuideImg src={guide1} alt="guide Image" />
        <Steps>
          <ContentTitle>Step 2:</ContentTitle>
          <Text>
            Open TRONSCAN click, sign in on top right, it is recommended that
            you sign in via Tron Link
          </Text>
        </Steps>
        <GuideImg src={guide2} alt="guide Image" />
        <Content>
          <Text>
            With multi signature, Token name and symbols cannot be modified once
            issued. please be mindful when you enter them, With multi signature,
            Token name and symbols cannot be modified once issued. please be
            mindful when you enter them.
          </Text>
        </Content>
        <Content>
          <Text>
            With multi signature, Token name and symbols cannot be modified once
            issued. please be mindful when you enter them, With multi signature,
            Token name and symbols cannot be modified once issued. please be
            mindful when you enter them.
          </Text>
        </Content>
        <Content>
          <Text>
            With multi signature, Token name and symbols cannot be modified once
            issued.
          </Text>
        </Content>
        <Steps>
          <ContentTitle>Step 3:</ContentTitle>
          <Text>
            Open TRONSCAN click, sign in on top right, it is recommended that
            you sign in via Tron Link
          </Text>
        </Steps>
        <GuideImg src={guide3} alt="guide Image" />
      </Container>
    </>
  );
};

export default NewUserGuide;
