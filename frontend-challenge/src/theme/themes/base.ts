import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

import muiTheme from './muiTheme';
import breakpoints from '../patterns/breakpoints';
import colors from '../patterns/colors';
import fonts from '../patterns/fonts';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
`;

export const theme: DefaultTheme = {
  // patterns
  muiTheme,
  breakpoints,
  colors,
  fonts,
  // components
};
