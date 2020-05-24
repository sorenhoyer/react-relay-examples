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
        primaryFoo {
          __typename
        }
        localState {
          currentFoo {
            # What I really just wanted to get was this:
            # name
            # entities(first: 10, types: [BAR, BAZ]) @connection(key: "SubNavigation_entities") {
            #   totalCount
            #   edges {
            #     node {
            #       uuid
            #       name
            #     }
            #   }
            # }
            # But since the localState.currentFoo is stored like like it is queried,
            # it has to match the query in FooSwitcher 1:1
            id
            uuid
            name
            type
            # I guess there is no way to add @connection and first: 10 to do pagination?
            entities(first: 9999999, types: [BAR, BAZ]) {
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
            <a
              key={n?.uuid}
              href={`entities/${n?.uuid}`}
            >
              {n?.name}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default SubNavigation;