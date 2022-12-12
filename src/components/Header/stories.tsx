import { Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'component/Header',
  component: Header
} as Meta;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
