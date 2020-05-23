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
        <h1>How it should work</h1>
        <ul>
          <li>
            <input type="checkbox" />
            <label>"currentFoo" should be automatically initialized to the value of "primaryFoo" on page load/refresh ("primaryFoo" should only setting "currentFoo" initially - nothing else!)</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>"currentFoo" should always be fully updated (complete with all fields) when changing "currentFoo" from "FooSwitcher" (verify with console, that no fields are omitted)</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>"currentFoo" should behave just like any other record of type Foo from the server schema and not be limited to certain pre-defined combination of query args. If you ask for currentFoo in a query or fragment, all fields should be available</label>
          </li>
        </ul>
      </section>
      <hr/>
      <section>
        <h1>Challenges and things to pay attention to</h1> 
        <ul>
          <li>
            -
            <label>Find a way to initialize currentFoo to the value of primaryFoo on first page load / refresh. I've struggled a lot with this with __clientField, custom handlers and commitLocalUpdate and inline fragment, but found no acceptable solutions that made currentFoo work consistently</label>
          </li>
          <li>
            -
            <label>In MainNavigation.jsx line 55 <code>const barBazCount = 2; // currentFoo?.entities?.totalCount;`</code> there's a temporary HACK to make the SubNavigation pop out always (instead of only when there are more than 1 Bar or Baz, which will never be the case until currentFoo is working correctly). It should work without it of course</label>
          </li>
          <li>
            -
            <label>Notice currentFoo is initially undefined. When you click Foo1, Foo2 or Foo3 in FooSwitcher "currentFoo" will rerender, but if you look closely in console you can see that only the id and name fields are returned. This is a problem.</label>
          </li>
          <li>
            -
            <label>There should be entities of type Bar and Baz rendering in a list in SubNavigation, but it doesn't because currentFoo.entities is undefined</label>
          </li>
          <li>
            -
            <label>Keep the console open and look for errors and undefined</label>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;