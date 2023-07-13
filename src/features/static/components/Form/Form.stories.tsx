import { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Form } from './Form';

export default {
  title: 'Features/Static/Components/Form',
  component: Form,
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = args => <Form {...args} />;

export const EmptyForm = Template.bind({});

export const InputtedForm = Template.bind({});

InputtedForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('email'), 'test@gmail.com', {
    delay: 100,
  });

  await userEvent.type(canvas.getByTestId('password'), 'password', {
    delay: 200,
  });

  await userEvent.click(canvas.getByRole('button'));
};
