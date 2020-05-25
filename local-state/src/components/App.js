import { css } from '@emotion/core';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Navigation from './Navigation/Navigation';

function App() {
  const data = useLazyLoadQuery(graphql`
    query AppQuery {
      # This component has no direct requirement for primaryFoo, so this seems really awkward just to initialize currentFoo to primaryFoo
      # Also currentFoo is stored with a key signature matching the exact query, so it needs to include all fields and can only be fetched by including all fields, and by using the exact same connection parameters.
      # This makes it very in-flexible and impossible to only request a subset of currentFoo in other Queries or Fragments and impossible to do paging over the entities connection in the SubNavigation component
      primaryFoo @__clientField(handle: "currentFoo") {
        id
        uuid
        name
        type
        entities(types: [BAR, BAZ]) {
          totalCount
          edges {
            node {
              id
              uuid
              name
              type
            }
          }
        }
      }
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
