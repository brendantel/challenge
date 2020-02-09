import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../src/theme/themes/base';

const StyledComponentsDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);

export default StyledComponentsDecorator;
