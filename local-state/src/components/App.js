import { css } from '@emotion/core';
import graphql from 'babel-plugin-relay/macro';
import React, { useContext } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Navigation from './Navigation/Navigation';
import { CurrentFooContext } from '../providers/CurrentFooProvider'; 

function App() {
  const { currentFooId } = useContext(CurrentFooContext);

  console.log(currentFooId)
  const data = useLazyLoadQuery(graphql`
    query AppQuery($currentFooId: ID!) {
      ...Navigation_data @arguments(currentFooId: $currentFooId)
    }
  `, {
    currentFooId: currentFooId
  });

  console.log(data);

  if (!data) return null;

  return (
    <div id="app" css={css`
      display: grid; 
      grid-template-areas: "navigation main";
      grid-template-columns: 10rem auto;
      grid-template-rows: 100%;
      min-height: 100%;
    `}>
      <Navigation 
        styles={css`
          grid-area: navigation; 
          position: relative;
        `} 
        data={data}
      />
      <main
        css={css`
          grid-area: main; 
          background: rgba(112, 161, 215, 1); 
          padding: 1rem;
        `}
      >
        <a
          href="https://github.com/sorenhoyer/react-relay-examples/blob/master/local-state/README.md"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          README.md
        </a>
      </main>
    </div>
  );
}

export default App;
