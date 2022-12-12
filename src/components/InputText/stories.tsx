import { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlass } from 'phosphor-react';
import { InputText, InputTextRootProps } from '.';

export default {
  title: 'component/InputText',
  component: InputText.Root,
  args: {
    children: <InputText.Input placeholder="Pesquisar" />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputTextRootProps>;

export const Default: StoryObj<InputTextRootProps> = {};
export const withoutIcon: StoryObj<InputTextRootProps> = {
  args: {
    children: [
      <InputText.Input placeholder="Pesquisar Posts" />,
      <InputText.Icon>
        <MagnifyingGlass />
      </InputText.Icon>
    ]
  }
};
