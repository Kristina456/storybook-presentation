import { Meta, StoryFn } from '@storybook/react';
import { About } from './About';

export default {
  title: 'Features/Static/Pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof About>;

const Template: StoryFn<typeof About> = () => <About />;

export const Default = Template.bind({});
