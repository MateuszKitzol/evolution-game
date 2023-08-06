import React, { Fragment, useState } from 'react';
import { MainPage } from './App/MainPage/MainPage.jsx';
import GlobalStyle from './GlobalStyles';

function App() {

  return (
    <Fragment>
      <GlobalStyle/>
      <MainPage/>
    </Fragment>
  )
}

export default App;
