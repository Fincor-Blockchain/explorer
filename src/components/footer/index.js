import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  facebook,
  youtube,
  medium,
  linkedin,
  telegram,
  scrolltop
} from 'src/assets/fincoreassests';
import {
  UncontrolledDropdown,
  DropdownToggle
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
import styled from 'styled-components';

import { logoFooter, flag, Background } from 'src/assets/fincoreassests';

const Wrapper = styled.div`
  position: relative;
`;
const FooterTop = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // padding-bottom: 180px;

  padding-bottom: 50px;
  padding-top: 50px;
  // padding-top: 75px;
  margin-top: 2.5rem;
  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;
const Logo = styled.img`
  width: 158px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;
const Icon = styled.img`
  width: 13.7px;
  height: 13.7px;
  object-fit: contain;
`;
const ScrollTop = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ScrollTopList = styled.div`
  display: flex;
  position: absolute;
  // bottom: 220px;
  bottom: 140px;
  right: 136px;
  justify-content: flex-end;
  @media (max-width: 992px) {
    bottom: 10px;
    right: 20px;
  }
  @media (max-width: 576px) {
    bottom: 20px;
  }
`;
const List = styled.ul`
  margin: 6px 0px;
  padding: 0;
  height: 96%;
  list-style: none;
  margin-bottom: 0;
  //added css
  display: flex;
  justify-content: center;
`;
const FooteLogoItems = styled.div`
  margin: 6px 0px;
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

// const ListItem = styled(Link)`
//   font-family: GilroyLight;
//   font-size: 14px;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2;
//   letter-spacing: normal;
//   text-align: left;
//   color: rgba(255, 255, 255, 0.7) !important;
//   display: flex;
//   flex-direction: column;
//   // color: #ffffff;
//   // opacity: 0.7;
//   text-decoration: none !important;
// `;

// const ListTag = styled.a`
//   color: #ffffff;
//   text-decoration: none;
//   font-family: GilroyExtraBold;
//   font-size: 14px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2;
//   letter-spacing: normal;
//   font-weight: 400;
//   &:hover {
//     color: #ffffff;
//     text-decoration:none;
// `;
const SocialLink = styled.a`
  color: #092326;
  text-decoration: none;
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  font-weight: 400;
  &:hover {
    color: #092326;
    text-decoration:none;
`;
const FooterTail = styled.div`
  background-color: #24234d;
`;
const FooterTailContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 20px 0;
  @media (max-width: 992px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    justify-content: space-between;
    height: 100px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconSection = styled.ul`
  display: flex;
  height: 100%;
  align-items: flex-end;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    margin-top: 25px;
    justify-content: center;
  }
`;

const ListItems = styled.li`
  background: white;
  margin-right: 15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  &:hover {
    background: #d5da43;
  }
  text-decoration: none;
`;

const Privacy = styled.p`
  font-size: 10px;
  font-size: 10px;
  color: #ffffff;
`;
const CopyRight = styled.p`
  opacity: 0.4;
  font-family: 'GilroySemiBold';
  font-size: 10px;
  color: #ffffff;
`;
const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
`;
const FooterWrapper = styled.div`
  // display: flex;
  // flex-wrap: wrap-revers;
  // justify-content: flex-start;
  // @media (max-width: 991px) {
  //   justify-content: space-between;
  // }
  // @media (max-width: 768px) {
  //   flex-direction: column-reverse;
  //   align-items: center;
  // }
  display: flex;
  // flex-wrap: wrap-revers;
  justify-content: center;
`;
const FooterLogoWrapper = styled.div`
  width: 25%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 70px;
  }
`;
// const FooterContentWrapper = styled.div`
//   width: 70%;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
const FlagIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`;
// const DropdownItemExp = styled(DropdownItem)`
//   :hover {
//     background-color: #ffffff;
//     color: #d5da43;
//   }
// `;
// const DropdownMenuExp = styled(DropdownMenu)``;
const Drop = styled(DropdownToggle)`
  font-family: GilroySemiBold;
  height: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  font-size: 14px;
  color: #fff !important;
  // text-transform: uppercase;
  letter-spacing: 0.69px;
`;
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <Wrapper>
      <FooterTop>
        <Container className="themed-container" fluid="xl">
          <FooterWrapper>
            <FooterLogoWrapper>
              <FooteLogoItems>
                <List>
                  <Link to="/">
                    <Logo src={logoFooter} alt="fincore logo" />
                  </Link>
                </List>
                <IconSection>
                  <ListItems>
                    <SocialLink
                      href="https://youtube.com"
                      target="_blank"
                      rel="follow"
                      title="Youtube">
                      <Icon src={youtube} alt="youtube" />
                    </SocialLink>
                  </ListItems>
                  <ListItems>
                    <SocialLink
                      href="https://medium.com"
                      target="_blank"
                      rel="follow"
                      title="medium">
                      <Icon src={medium} alt="medium" />
                    </SocialLink>
                  </ListItems>
                  <ListItems>
                    <SocialLink
                      href="https://telegram.com"
                      target="_blank"
                      rel="follow"
                      title="telegram">
                      <Icon src={telegram} alt="telegram" />
                    </SocialLink>
                  </ListItems>
                  <ListItems>
                    <SocialLink
                      href="https://linkedin.com"
                      target="_blank"
                      rel="follow"
                      title="linkedin">
                      <Icon src={linkedin} alt="linkedin" />
                    </SocialLink>
                  </ListItems>
                  <ListItems>
                    <SocialLink
                      href="https://facebook.com"
                      target="_blank"
                      rel="follow"
                      title="Facebook">
                      <Icon src={facebook} alt="facebook" />
                    </SocialLink>
                  </ListItems>
                </IconSection>
              </FooteLogoItems>
            </FooterLogoWrapper>
            {/* Footer Columns will be used later  */}
            {/* <FooterContentWrapper>
              <Row>
                <Col>
                  <List>
                    <ListTag
                      href="#"
                      target="_blank"
                      rel="follow">
                      Blockchain
                    </ListTag>
                    <ListItem to="#">Nodes</ListItem>
                    <ListItem to="/blocks">Blocks</ListItem>
                    <ListItem to="/txs">Transactions</ListItem>
                    <ListItem to="#">Transfer</ListItem>
                    <ListItem to="#">Contracts</ListItem>
                  </List>
                </Col>
                <Col>
                  <List>
                    <ListTag>Token Section</ListTag>
                    <ListItem to="#"> Token Tracker</ListItem>
                    <ListItem to="#"> Token Tracker</ListItem>
                    <ListItem to="#"> Token Tracker</ListItem>
                  </List>
                </Col>
                <Col>
                  <List>
                    <ListTag>Data Section</ListTag>
                    <ListItem to="#"> Charts (Main-Section)</ListItem>
                    <ListItem to="#"> Top Statistics</ListItem>
                    <ListItem to="#">Foundation addresses</ListItem>
                  </List>
                </Col>
                <Col>
                  <List>
                    <ListTag>Committee Section</ListTag>
                    <ListItem to="#">Representatives</ListItem>
                    <ListItem to="#">Votes</ListItem>
                    <ListItem to="#">Proposals</ListItem>
                  </List>
                </Col>
                <Col>
                  <List>
                    <ListTag>More Section</ListTag>
                    <ListItem to="#">Myfincor API</ListItem>
                    <ListItem to="#">Beginners Guide</ListItem>
                    <ListItem to="#">FAQ</ListItem>
                  </List>
                </Col>
              </Row>
            </FooterContentWrapper> */}
          </FooterWrapper>
        </Container>
      </FooterTop>
      <FooterTail>
        <Container fluid="xl">
          <FooterTailContent>
            <Privacy>Privacy Policy</Privacy>
            <CopyRight>© 2021 FINCOR. All rights reserved.</CopyRight>
            <LanguageSelector>
              <FlagIcon src={flag} />
              <UncontrolledDropdown direction="up">
                <Drop nav caret>
                  English
                </Drop>

                {/* Dropdown To select language will be used later👇  */}
                {/* <DropdownMenuExp right>
                  <DropdownItemExp>Russian</DropdownItemExp>
                  <DropdownItemExp>Chinese</DropdownItemExp>
                  <DropdownItemExp>Italian</DropdownItemExp>
                </DropdownMenuExp> */}
              </UncontrolledDropdown>
            </LanguageSelector>
            <ScrollTopList>
              <ScrollTop
                src={scrolltop}
                alt="Scroll to top"
                onClick={scrollToTop}
              />
            </ScrollTopList>
          </FooterTailContent>
        </Container>
      </FooterTail>
    </Wrapper>
  );
};

export default Footer;
