import { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlass } from 'phosphor-react';
import { Search, SearchProps } from '.';

export default {
  title: 'component/Search',
  component: Search,
  args: {
    placeholder: 'Pesquisar'
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: StoryObj<SearchProps> = {};
export const withoutIcon: StoryObj<SearchProps> = {
  args: {
    children: <MagnifyingGlass color="#CEC2C2" size={24} />
  }
};
