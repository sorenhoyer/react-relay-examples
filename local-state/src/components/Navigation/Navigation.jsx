import { css } from '@emotion/core';
import { graphql } from 'babel-plugin-relay/macro';
import React, { useState } from 'react';
import { useFragment } from 'react-relay/hooks';
import MainNavigation from './MainNavigation';
import SubNavigation from './SubNavigation';

const Navigation = (props) => {
  const [showSubNavigation, setShowSubNavigation] = useState(false);

  const toggleShowSubNavigation = () => setShowSubNavigation(!showSubNavigation);

  const data = useFragment(graphql`
    fragment Navigation_data on Query
      @argumentDefinitions(currentFooId: {type: "ID!"}) {
      node(id: $currentFooId) {
        ...MainNavigation_currentFoo
      }

      fooCount: entities(first: 2, types: [FOO]) {
        ...MainNavigation_fooCount
      }
    }
  `, props.data);

  console.log(data);

  if (!data) return null;

  return (
    <div css={props.styles}>
      <MainNavigation 
        styles={css`
          background: rgba(244, 124, 124, 1); 
          z-index: 1000;
          position: absolute;
        `}
        currentFoo={data.node} 
        fooCount={data.fooCount} 
        toggleShowSubNavigation={toggleShowSubNavigation}
      />
      <div css={css`
        position: absolute;
        top: 0;
        left: 10rem;
        width: 26rem;
        height: 100%;
        z-index: 700;
        transition: transform 0.3s ease-in-out;
        transform: ${showSubNavigation ? 'translateX(0)' : 'translateX(calc(-100% - 10rem))'};
      `}>
        <div css={css`
          background: rgba(161, 222, 147, 0.9);
          backdrop-filter: blur(0.3125rem);
          padding: 2rem 3rem;
          z-index: 800;
          height: 100%;
        `}
        >
          <SubNavigation 
            open={showSubNavigation}
            close={e => {
              e.stopPropagation();
              setShowSubNavigation(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;