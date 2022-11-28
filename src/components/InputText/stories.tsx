import { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlass } from 'phosphor-react';
import { InputText, InputTextInputProps } from '.';

export default {
  title: 'component/InputText',
  component: InputText,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: StoryObj<InputTextInputProps> = {
  args: {
    placeholder: 'Pesquisar'
  }
};
export const withoutIcon: StoryObj<InputTextInputProps> = {
  args: {
    placeholder: 'Pesquisar',
    children: <MagnifyingGlass color="#CEC2C2" size={24} />
  }
};
