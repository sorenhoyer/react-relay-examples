import { css } from '@emotion/core';
import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import updateFoo from '../relay/mutations/updateFoo';

const FooSwitcher = () => {
  const data = useLazyLoadQuery(graphql`
    query FooSwitcherQuery {
      entities(types: [FOO]) {
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
  `, {})

  console.log(data)

  if (!data) return null;

  const nodes =
    data
    ?.entities
    ?.edges
    ?.filter(Boolean)
    .map(edge => edge?.node)
    .filter(Boolean) ?? [];

  return (
    <div 
      css={css`
        background: rgba(247, 244, 139, 1); 
        text-align: center; 
        padding: 1rem;
      `}
    >
      <p>FooSwitcher</p>
      {nodes
        .map(node => (
          <button 
            css={css`
              width: 100%;
            `} 
            key={node.id}
            type="button" 
            onClick={(e) => {
              updateFoo(node?.id)
            }} 
          >
            {node.name}
          </button>
        ))
      }
    </div>
  )
}

export default FooSwitcher;