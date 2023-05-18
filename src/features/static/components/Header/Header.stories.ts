import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Features/Static/Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    navigationLinks: ['Home', 'About us', 'Careers'],
  },
};

export const LoggedOut: Story = {
  args: {
    navigationLinks: ['Home', 'About us', 'Careers'],
  },
};
