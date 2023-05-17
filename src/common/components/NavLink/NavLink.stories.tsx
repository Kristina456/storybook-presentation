import { Meta, StoryFn } from '@storybook/react';
import { NavLink } from './NavLink';

export default {
  title: 'Common/Components/NavLink',
  component: NavLink,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof NavLink>;

const Template: StoryFn<typeof NavLink> = args => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: 'Home',
};
