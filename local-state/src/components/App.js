import { css } from '@emotion/core';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Main from './Main';
import Navigation from './Navigation/Navigation';

function App() {
  const data = useLazyLoadQuery(graphql`
    query AppQuery {
      ...Navigation_data
    }
  `, {});

  console.log(data);

  if (!data) return null;

  return (
    <div id="app" css={css`
      display: grid; 
      grid-template-areas: "navigation main";
      grid-template-columns: 10rem auto;
      grid-template-rows: 100%;
    `}>
      <Navigation 
        styles={css`
          grid-area: navigation; 
          position: relative;
        `} 
        data={data}
      />
      <Main />
    </div>
  );
}

export default App;
