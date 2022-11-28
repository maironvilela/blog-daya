import { ReactNode } from 'react';
import { InputText } from '../InputText';

export type SearchProps = {
  children?: ReactNode;
  placeholder: string;
};

export function Search({ placeholder, children }: SearchProps) {
  return <InputText placeholder={placeholder}>{children}</InputText>;
}
