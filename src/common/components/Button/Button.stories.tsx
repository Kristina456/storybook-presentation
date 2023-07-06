import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ outline: "5px dotted black"}}>
        <Story />
      </div>
    ),
    (Story) => (
      <div style={{ padding: '3em' , backgroundColor: "blue", }}>
        <Story />
      </div>
    ),
  ]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' , backgroundColor: "yellow", }}>
        <Story />
      </div>
    ),
  ]
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
