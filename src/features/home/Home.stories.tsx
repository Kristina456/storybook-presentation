import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Home } from './Home';

const meta: Meta<typeof Home> = {
  title: 'Features/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
