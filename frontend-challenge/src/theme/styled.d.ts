import 'styled-components';

import breakpoints from './patterns/breakpoints';
import { Theme } from '@material-ui/core';

declare module 'styled-components' {
  export interface DefaultTheme {
    muiTheme: Theme;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    colors: {
      black: string;
      white: string;
    };
    fonts: {};
  }
}
