import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
  
  ${normalize()}
  
  body {
    font-family: ${typography.font.primary};
    font-size: ${typography.size.default}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * {
      box-sizing: border-box;
    }
  }
`;
