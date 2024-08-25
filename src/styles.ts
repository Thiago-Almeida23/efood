import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF8F2',
  lightSalmon: '#FFEBD9',
  salmon: '#E66767',
  almostBlack: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: #FFF8F2;
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
