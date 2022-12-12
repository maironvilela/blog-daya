import { MagnifyingGlass } from 'phosphor-react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

export default function Home() {
  return (
    <div>
      <Header />
      <Search placeholder="Pesquisar">
        <MagnifyingGlass />
      </Search>
    </div>
  );
}
