import { MagnifyingGlass } from 'phosphor-react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

export default function Home() {
  return (
    <div>
      <Header />
      <Search placeholder="Pesquisar">
        <MagnifyingGlass color="#CEC2C2" size={24} />
      </Search>
    </div>
  );
}
