import { ReactNode } from 'react';
import { InputText } from '../InputText';

export type SearchProps = {
  children?: ReactNode;
  placeholder: string;
};

export function Search({ placeholder, children }: SearchProps) {
  return (
    <InputText.Root>
      <InputText.Input placeholder={placeholder} />
      <InputText.Icon>{children}</InputText.Icon>
    </InputText.Root>
  );
}
