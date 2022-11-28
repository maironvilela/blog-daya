import { MagnifyingGlass } from 'phosphor-react';

export function Search() {
  return (
    <div className="flex rounded border border-gray-100 mt-1 px-2 py-1 mx-1 bg-white-100 focus-within:ring-2 ring-green-700 ">
      <input
        placeholder="Pesquisar"
        className="flex-1 placeholder:text-gray-300 text-xs sm:text-sm focus:outline-none focus:border-none bg-transparent"
      />
      <MagnifyingGlass color="#CEC2C2" size={24} className="my-auto" />
    </div>
  );
}
