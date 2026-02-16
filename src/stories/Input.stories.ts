import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    type: 'password',
    clearable: true,
  },
};
export const Text: Story = {
  args: {
    type: 'text',
    clearable: true,
  },
};
export const Number: Story = {
  args: {
    type: 'number',
    clearable: true,
  },
};
