
import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta = {
title: 'Badge',
  component: Badge,
    tags: ['autodocs'],
}satisfies Meta<typeof Badge>
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Badge',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: 'neutral'
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning'
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};
 
export const Small: Story = {
  args: {
    children: 'Badge',
    size: 'sm'
  },
};

export const Medium: Story = {
  args: {
    children: 'Badge',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Badge',
    size: 'lg'
  },
};
export default meta;