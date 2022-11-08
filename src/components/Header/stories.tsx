import { Meta, Story } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'component/Header',
  component: Header
} as Meta;

export const Basic: Story = () => <Header />;
