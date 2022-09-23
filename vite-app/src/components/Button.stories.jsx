import React from 'react';
import { Button, APPEARANCES, SIZES } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
      },
      options: Object.values(APPEARANCES),
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(SIZES),
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

export const AllButtons = (args) => {
  return (
    <>
      <Button>Default</Button>
      <hr />
      <Button appearance='primary' size='small'>
        Primary Small
      </Button>
      <Button appearance='primary' size='medium'>
        Primary Medium
      </Button>
      <Button appearance='primary' size='large'>
        Primary Large
      </Button>
      <hr />
      <Button appearance='primary' size='small' isDisabled={true}>
        Primary Small
      </Button>
      <Button appearance='primary' size='medium' isDisabled={true}>
        Primary Medium
      </Button>
      <Button appearance='primary' size='large' isDisabled={true}>
        Primary Large
      </Button>
    </>
  );
};

AllButtons.storyName = 'All Buttons';

const Template = (args) => (
  <Button {...args}>{args.text || 'Your Text'}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
};
