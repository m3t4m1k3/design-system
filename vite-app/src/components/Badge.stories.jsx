import React from 'react';
import { Badge, APPEARANCES } from './Badge';

export default {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
      },
      options: Object.values(APPEARANCES),
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Badge {...args}>{args.text || 'Your Text'}</Badge>;

export const AllBadges = (args) => (
  <>
    <Badge appearance='primary'>{args.text || 'Primary'}</Badge>
    <Badge appearance='white'>{args.text || 'White'}</Badge>
    <Badge appearance='secondary'>{args.text || 'Secondary'}</Badge>
  </>
);

AllBadges.argTypes = {
  appearance: {
    table: { disable: true },
  },
};

AllBadges.storyName = 'All Badges';

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
};

export const White = Template.bind({});
White.args = {
  appearance: 'white',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};
