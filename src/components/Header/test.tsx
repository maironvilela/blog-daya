import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('<HEADER>', () => {
  it('should be able render the default input label with correct color ', () => {
    render(<Header />);
    expect(screen.getByText('HEADER')).toBeInTheDocument();
  });
});
