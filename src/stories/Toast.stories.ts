import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toast } from '../components/Toast/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    duration: 2000,
    type: 'info',
    message: 'Notification',
    closeBtn: true,
  },
};
export const Error: Story = {
  args: {
    duration: 3000,
    type: 'error',
    message: 'Error',
    closeBtn: true,
  },
};
export const Success: Story = {
  args: {
    duration: 1500,
    type: 'success',
    message: 'Success!',
    closeBtn: true,
  },
};
export const InfoWithoutClose: Story = {
  args: {
    duration: 2000,
    type: 'info',
    message: 'Notification',
    closeBtn: false,
  },
};
