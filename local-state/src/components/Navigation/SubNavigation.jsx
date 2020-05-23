import { graphql } from 'babel-plugin-relay/macro';
import React, { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import FooSwitcher from '../FooSwitcher';

const SubNavigation = (props) => {
  const [showFooSwitcher, setShowFooSwitcher] = useState(false);
  
  const data = useLazyLoadQuery(
    graphql`
      query SubNavigationQuery {
        # Hmm for some reason I need to have something here that is not just local state
        primaryFoo { # I guess I just need to have it here for some reason
          __typename
        }
        localState {
          currentFoo{
            id
            name
            ... on Foo {
              # TODO pagination
              entities(first: 10, types: [BAR, BAZ]) @connection(key: "SubNavigation_entities") {
                totalCount
                edges {
                  node {
                    id
                    uuid
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    {},
  );

  // Hmm for some reason entities can't be fetched - only id and name :/
  console.log(data);

  const currentFoo = data?.localState?.currentFoo;
  const edges = data?.localState?.currentFoo?.entities?.edges;

  // Commented out since entities will always be undefined until we get currentFoo working correctly
  // if (!edges?.length) return null;

  const nodes =
    edges
      ?.filter(Boolean)
      .map(edge => edge?.node)
      .filter(Boolean) ?? [];

  return (
    <div css={props.styles}>
      <div>
        <h2>
          {currentFoo?.name ?? 'undefined'}
          <span>
            <button
              onClick={e => {
                e.preventDefault();
                setShowFooSwitcher(!showFooSwitcher)
              }}>
              Switch Foo
            </button>
          </span>
        </h2>
        {showFooSwitcher && <FooSwitcher />}
        <p>If currentFoo.entities is not undefined you will see a list of bars and bazzes below.</p>
        {
          nodes.filter(Boolean)?.map(n => (
            <a href={`entities/${n?.uuid}`} key={n?.uuid} >
              <div >
                <div>
                  <span>{n?.name}</span>
                  <span>&gt;</span>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default SubNavigation;