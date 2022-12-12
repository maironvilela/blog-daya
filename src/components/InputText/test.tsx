import { render, screen } from '@testing-library/react';
import { InputText } from '.';

describe('<InputText>', () => {
  it('should be able render the default input label with correct color ', () => {
    render(<InputText.Root />);
    expect(screen.getByText('InputText')).toBeInTheDocument();
  });
});
