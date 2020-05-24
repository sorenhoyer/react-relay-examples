import { css } from '@emotion/core';
import React from 'react';

const Main = () => {
  return (
    <main 
      css={css`
        grid-area: main; 
        background: rgba(112, 161, 215, 1); 
        padding: 1rem;

        ul{
          list-style-type: none; 
          margin-top: 0.5rem;

          li {
            padding-top: 0.5rem;
          }

          li label {
            padding-left: 0.5rem;
            display:inline-block; 
            max-width:80%; 
            vertical-align:top;
          }

          code {
            background: #eee; 
            padding: 0 0.1875rem; 
            font-family: courier, monospace; 
            border-radius: 0.1875rem;
          }
        }

        section {
          padding: 1rem;
        }

        hr {
          margin: 1rem 0;
        }
      `}
    >
      <section>
        <h1>How it works</h1>
        <ul>
          <li>
            -
            <label>currentFoo should be automatically initialized to the value of primaryFoo on page load/refresh (primaryFoo should only setting currentFoo initially - nothing else!)</label>
          </li>
          <li>
            -
            <label>If currentFoo has only 1 entity of Bar or Baz it should not pop out the SubNavigation when you click "entities" but navigate directly to it (routing is deliberately left out for this example, since that is not important). If there are more than 1 entities of type Bar or Baz, the SubNavigation should pop open</label>
          </li>
          <li>
            -
            <label>You can switch currentFoo by selecting a Foo in the FooSwitcher component, which is both available from the MainNavigation and SubNavigation</label>
          </li>
          <li>
            -
            <label>currentFoo should behave just like any other record of type Foo from the server schema and not be limited to certain pre-defined combination of query args. If you ask for currentFoo in a query or fragment, all fields should be available - it should not only be stored under the exact query signature that it was fetched with when it got stored initially - there has to be some flexibility so we can query it like if it was the primaryFoo from the remote / server schema</label>
          </li>
        </ul>
      </section>
      <hr/>
      <section>
        <h1>Hacks I had to make to make this "work" and the limitations that comes</h1> 
        <br/>
        <h3>The first thing you will notice is in AppQuery</h3>
        <pre>
          <code>
{`query AppQuery {
  primaryFoo @__clientField(handle: "currentFoo") {
    id
    uuid
    name
    type
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
}`}
          </code>
        </pre>
        <br/>
        <h4>Problems:</h4>
        <ul>
          <li>
            -
            <label>This component has no direct requirement for primaryFoo, so this seems really awkward just to initialize currentFoo to primaryFoo</label>
          </li>
          <li>
            -
            <label>Also currentFoo is stored with a key signature matching the exact query, so it needs to include all fields and can only be fetched by including all fields, and by using the exact same connection parameters.</label>
          </li>
          <li>
            -
            <label>This makes it very in-flexible and impossible to only request a subset of currentFoo in other Queries or Fragments and impossible to do paging over the entities connection in the SubNavigation component</label>
          </li>
        </ul>
        <br/>
        <br/>
        <br/>
        <h3>The next big problem is in SubNavigation</h3>
        <pre>
          <code>
{`query SubNavigationQuery {
  primaryFoo {
    __typename
  }
  localState {
    currentFoo {
      id
      uuid
      name
      type
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
}`}
          </code>
        </pre>
        <br/>
        <h4>Problems:</h4>
        <ul>
          <li>
            -
            <label>You need to include something in the query that is not local state, which is the reason for primaryFoo.__typename</label>
          </li>
          <li>
            -
            <label>The ideal query would be something like:
              <pre>
                <code>
{`query SubNavigationQuery {
    localState {
    currentFoo {
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
}`}
                </code>
              </pre>
            </label>
          </li>
          <li>
            -
            <label>This makes it very in-flexible and impossible to only request a subset of currentFoo in other Queries or Fragments and impossible to do paging over the entities connection in the SubNavigation component</label>
          </li>
        </ul>
        <br/>
        <br/>
        <br/>
        <h3>Likewise in FooSwitcher</h3>
        <pre>
          <code>
{`query FooSwitcherQuery {
  entities(types: [FOO]) {
    edges {
      node {
        id
        uuid
        name
        type
        ... on Foo {
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
  }
}`}
          </code>
        </pre>
        <br/>
        <p>Where instead it should just be:</p>
        <pre>
          <code>
{`query FooSwitcherQuery {
  entities(types: [FOO]) {
    edges {
      node {
        id
        name
      }
    }
  }
}`}
          </code>
        </pre>
      </section>
    </main>
  );
}

export default Main;