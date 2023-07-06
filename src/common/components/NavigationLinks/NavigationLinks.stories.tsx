import { Meta, StoryFn } from '@storybook/react';
import { NavigationLinks } from './NavigationLinks';

export default {
  title: 'Common/Components/Navigation links',
  component: NavigationLinks,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof NavigationLinks>;

const Template: StoryFn<typeof NavigationLinks> = args => (
  <NavigationLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'Home', href: 'home' },
    { name: 'About us', href: 'about' },
    { name: 'Careers', href: 'careers' },
  ],
};
