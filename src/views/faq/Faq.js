import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import DropdownItem from './components/DropdownItem';
import { ScreenTitle } from 'src/components';

// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const AccordianTitle = styled.p`
  font-size: 18px;
  font-family: 'GilroyBold';
  color: #111827;
`;
const SemiBoldText = styled(AccordianTitle)`
  font-size: 14px;
`;
const ContentTitle = styled(SemiBoldText)`
  margin-bottom: 6px;
  font-size: 12px;
`;
const Text = styled.p`
  opacity: 0.4;
  font-size: 12px;
  font-family: 'GilroyMedium';
  line-height: 1.4;
  margin-bottom: 3px;
`;

const TextWrapper = styled.div``;

const Faq = () => {
  const data = [
    {
      id: 0,
      accordiantitle: 'Tips on token issuance',
      contenttitle1: '1. Token name and symbol:',
      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 1,
      accordiantitle:
        'When submitting votes for SRs on TRONSCAN, I got a pop-up message saying “something went wrong while submitting your votes. Please try again later”. What should I do?',
      contenttitle1: '1. Token name and symbol:',
      contenttitle2: '2. Token description:',
      contenttitle3: '3. Token supply:',
      contenttitle4: '4. Token decimals:',
      contenttitle5: '5. Token logo:',
      contenttitle6: '6. Token issue:',
      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',

      text2_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text2_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',

      text3_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text3_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text3_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text4_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text5_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text6_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 2,
      accordiantitle:
        'Why is some TRC10 tokens’ total circulating supply different from the total amount held by the users',
      contenttitle1: '1. Token name and symbol:',
      contenttitle2: '2. Token description:',
      contenttitle3: '3. Token supply:',
      contenttitle4: '4. Token decimals:',
      contenttitle5: '5. Token logo:',
      contenttitle6: '6. Token issue:',
      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',

      text2_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text2_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',

      text3_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text3_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text3_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text4_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text5_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them',
      text6_1:
        '1) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 3,
      accordiantitle: 'Is there a hardware wallet that supports TRON',
      contenttitle1: '1. Token name and symbol:',
      contenttitle2: '2. Token description:',
      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them',

      text2_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text2_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text2_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 4,
      accordiantitle: 'Why is my bandwidth zero after creating a new address',
      contenttitle1: '1. Token name and symbol:',
      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    },
    {
      id: 4,
      accordiantitle: 'How to claim BTT airdrop',
      contenttitle1: '1. Token name and symbol:',

      text1_1:
        ' 1) Token name and symbol are made up of letters and numbers, but not special characters.You can separate the letters and numbers of a name or symbol with spaces. A token name is 2 - 30 characters long. A token symbol is 2 - 10 characters long',
      text1_2:
        ' 2) TRC20 token name and symbol must match the one in the contract, otherwise the token cannot be recorded',
      text1_3:
        '3) Token name and symbols cannot be modified once issued. please be mindful when you enter them'
    }
  ];

  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="FAQ" subTitle="Home/More/FAQ" />
        </TopWrapper>
        {data.map((item, index) => (
          <DropdownItem title={item.accordiantitle} key={index}>
            {item.contenttitle1 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle1 ? item.contenttitle1 : null}
                </ContentTitle>
                <Text>{item.text1_1}</Text>
                <Text>{item.text1_2}</Text>
                <Text>{item.text1_3}</Text>
              </TextWrapper>
            )}
            {item.contenttitle2 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle2 ? item.contenttitle2 : null}
                </ContentTitle>
                <Text>{item.text2_1}</Text>
                <Text>{item.text2_2}</Text>
                <Text>{item.text2_3}</Text>
              </TextWrapper>
            )}
            {item.contenttitle3 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle3 ? item.contenttitle3 : null}
                </ContentTitle>
                <Text>{item.text3_1}</Text>
                <Text>{item.text3_2}</Text>
                <Text>{item.text3_3}</Text>
              </TextWrapper>
            )}
            {item.contenttitle4 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle4 ? item.contenttitle4 : null}
                </ContentTitle>
                <Text>{item.text4_1}</Text>
                <Text>{item.text4_2}</Text>
              </TextWrapper>
            )}
            {item.contenttitle5 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle5 ? item.contenttitle6 : null}
                </ContentTitle>
                <Text>{item.text5_1}</Text>
              </TextWrapper>
            )}
            {item.contenttitle6 && (
              <TextWrapper>
                <ContentTitle>
                  {item.contenttitle6 ? item.contenttitle6 : null}
                </ContentTitle>
                <Text>{item.text6_1}</Text>
              </TextWrapper>
            )}
          </DropdownItem>
        ))}
      </Container>
    </>
  );
};

export default Faq;
