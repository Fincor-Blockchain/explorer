import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { Background } from 'src/assets/fincoreassests';
import { Heading, SearchInput } from 'src/components';
// import { HotSearch } from 'src/components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 1rem 0 0 0;
  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 600px;

  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding-bottom: 130px;
    height: 100%;
  }
`;

const Banner = (props) => {
  let location = useLocation();
  return (
    <Wrapper>
      <Container className="themed-container" fluid="xl">
        {location.pathname === '/' ? (
          <Heading
            small="The"
            small2="Explorer"
            heading="Fincor"
            para="Search By Address / Tx Hash / Block"
          />
        ) : null}
        <SearchInput />
        {/* Hot serach under Seacrch bar will be used later */}
        {/* <HotSearch /> */}
      </Container>
    </Wrapper>
  );
};

export default Banner;
