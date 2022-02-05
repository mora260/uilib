// stories/button.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

import { makeTheme } from 'dripsy';
import { DripsyProvider } from 'dripsy';

const theme = makeTheme({
  colors: {
    $primary: '#D5B9B2',
    $secondary: '#A26769',
    $tertiary: '#582C4D',
    $light: '#ECE2D0',
    $dark: '#BFB5AF',
  },
  breakpoints: ['400px', '768px', '1024px', '1192px'],
});

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => {
  return (
    <DripsyProvider theme={theme}>
      <Button {...args} />
    </DripsyProvider>
  );
};

Basic.args = {
  label: 'Hello World',
  color: 'pink',
};

export const Primary: ComponentStory<typeof Button> = (args) => {
  return (
    <DripsyProvider theme={theme}>
      <Button {...args} />
    </DripsyProvider>
  );
};

Primary.args = {
  label: 'Hello World',
  color: '$primary',
};
