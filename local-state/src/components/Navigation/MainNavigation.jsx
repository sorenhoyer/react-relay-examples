import { css } from '@emotion/core';
import { graphql } from 'babel-plugin-relay/macro';
import React, {useState} from 'react';
import { useFragment } from 'react-relay/hooks';
import FooSwitcher from '../FooSwitcher';

const MainNavigation = (props) => {
  const [showFooSwitcher, setShowFooSwitcher] = useState(false);

  const currentFoo = useFragment(graphql`
    fragment MainNavigation_currentFoo on Foo {
      id
      uuid
      name
      type
      ... on Foo {
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
    }
  `, props.currentFoo);

  const fooCount = useFragment(graphql`
    fragment MainNavigation_fooCount on EntityConnection {
      totalCount
    }
  `, props.fooCount);

  // Unfortunately currrentFoo.entities is undefined. Why?
  console.log(currentFoo);
  console.log(fooCount);

  if (!currentFoo || !fooCount) return null;

  const toggleShowFooSwitcher = () => setShowFooSwitcher(!showFooSwitcher);

  const barBazzes = 
    currentFoo
    ?.entities?.edges
    ?.filter(Boolean)
    .map(edge => edge?.node)
    .filter(Boolean);

  // HACK TO MAKE THE SUBNAVIGATION POP OUT
  // SHOULD WORK WITH COMMENTED IN CODE
  const barBazCount = 2; // currentFoo?.entities?.totalCount;

  console.log(barBazzes);
  console.log(barBazCount)

  // if (!barBazzes || !barBazCount) return null;

  return (
    <div 
      css={[
        css`
          height: 100%; 
          padding: 1rem;
        `, 
        props.styles
      ]}
    >
      <p>
        Current Foo is: 
        <strong>
          {currentFoo?.name ?? 'undefined (until you select from the FooSwitcher below)'}
        </strong>
      </p>
      <div>
        <button 
          type="button"
          onClick={toggleShowFooSwitcher}
        >
          There are {fooCount.totalCount} Foos. Click to switch Foo
        </button>
      </div>
      {showFooSwitcher && <FooSwitcher />}
      <a
        href={`/entities/${barBazzes?.[0]?.uuid}`}
        onClick={e => {
          if (barBazCount > 1) {
            e.preventDefault();
            props.toggleShowSubNavigation();
          }
        }}
      >
        Entities
      </a>
    </div>
  );
}

export default MainNavigation;