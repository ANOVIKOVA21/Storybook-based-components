import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'SidebarMenu',
  component: SidebarMenu,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  args: {
    state: 'opened',
    items: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
    onClose: fn(),
  },
};
export const Closed: Story = {
  args: {
    state: 'closed',
    items: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
    onClose: fn(),
  },
};
export const OneLevel: Story = {
  render: () => {
    const [state, setState] = useState<'opened' | 'closed'>('closed');

    return (
      <>
        <button onClick={() => setState('opened')}>Open Menu</button>
        <SidebarMenu
          state={state}
          items={[{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }]}
          onClose={() => setState('closed')}
        />
      </>
    );
  },
};

export const TwoLevel: Story = {
  render: () => {
    const [state, setState] = useState<'opened' | 'closed'>('closed');

    return (
      <>
        <button onClick={() => setState('opened')}>Open Menu</button>
        <SidebarMenu
          state={state}
          items={[
            { label: 'Home' },
            { label: 'About' },
            {
              label: 'Services',
              children: [{ label: 'Web Development' }, { label: 'UI/UX Design' }],
            },
            { label: 'Contact' },
          ]}
          onClose={() => setState('closed')}
        />
      </>
    );
  },
};
