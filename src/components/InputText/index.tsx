import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export type InputTextRootProps = {
  children?: ReactNode;
};

export type InputTextInputProps = InputHTMLAttributes<HTMLInputElement>;

export type InputTextIconProps = {
  children?: ReactNode;
};

const InputTextRoot = ({ children }: InputTextRootProps) => {
  return (
    <div className="flex rounded border border-gray-100 mt-1 px-2 py-1 mx-1 bg-white-100 focus-within:ring-2 ring-green-700 h-8">
      {children}
    </div>
  );
};
InputTextRoot.displayName = 'InputText.Root';

const InputTextInput = (props: InputTextInputProps) => {
  return (
    <input
      {...props}
      className="flex-1 placeholder:text-gray-300 text-xs sm:text-sm focus:outline-none focus:border-none bg-transparent"
    />
  );
};
InputTextInput.displayName = 'InputText.Input';

const InputTextIcon = ({ children }: InputTextIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

InputTextIcon.displayName = 'InputText.Icon';

export const InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Icon: InputTextIcon
};
