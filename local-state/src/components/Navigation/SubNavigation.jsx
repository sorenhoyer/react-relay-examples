import { graphql } from 'babel-plugin-relay/macro';
import React, { useContext, useState } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import FooSwitcher from '../FooSwitcher';
import { CurrentFooContext } from '../../providers/CurrentFooProvider'; 

const SubNavigation = (props) => {
  const { currentFooId } = useContext(CurrentFooContext);
  const [showFooSwitcher, setShowFooSwitcher] = useState(false);
  
  const data = useLazyLoadQuery(
    graphql`
      query SubNavigationQuery($currentFooId: ID!) {
        node(id: $currentFooId) {
          ... on Foo {
            name
            entities(first: 10, types: [BAR, BAZ]) @connection(key: "SubNavigation_entities") {
              totalCount
              edges {
                node {
                  uuid
                  name
                }
              }
            }
          }
        }
      }
    `,
    { currentFooId: currentFooId },
  );

  // Hmm for some reason entities can't be fetched - only id and name :/
  console.log(data);

  const currentFoo = data?.node;
  const edges = data?.node?.entities?.edges;

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