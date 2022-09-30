import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'src/globalStyle';
import '../src/styles/new_css.css';
import MainApp from 'src/navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from './redux/store';
import './Style.css';

const Wrapper = styled.div``;
const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <GlobalStyle />
        <MainApp />
      </Provider>
    </Wrapper>
  );
};

export default App;
