/** @type { import('@storybook/react').Preview } */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const preview = {
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
