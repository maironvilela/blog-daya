import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export function InputText({ children, ...props }: InputTextInputProps) {
  return (
    <div className="flex rounded border border-gray-100 mt-1 px-2 py-1 mx-1 bg-white-100 focus-within:ring-2 ring-green-700 h-8">
      <input
        {...props}
        className="flex-1 placeholder:text-gray-300 text-xs sm:text-sm focus:outline-none focus:border-none bg-transparent"
      />
      {children}
    </div>
  );
}
