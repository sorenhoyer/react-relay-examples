import { css, Global } from '@emotion/core';
import React from 'react';
import App from './App'

const Root = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
        
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        
          html {
            box-sizing: border-box;
            font-family: sans-serif;
            font-size: 16px;
          }
        
          html,
          body,
          #root,
          #app {
            height: 100%;
            width: 100%;
          }
        `}
      />
      <App />
    </>
  )
}

export default Root;