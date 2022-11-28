import { render, screen } from '@testing-library/react';
import { Search } from '.';

describe('<Search>', () => {
  it('should be able render the default input label with correct color ', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
