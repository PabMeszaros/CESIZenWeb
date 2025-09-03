import { render, screen } from '@testing-library/react';
import App from './App';

// ici, on ne wrap PAS avec MemoryRouter
test('renders Login page by default', () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
