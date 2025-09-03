import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login page by default', () => {
  render(<App />);
  // Vérifie le titre de la page de connexion
  expect(screen.getByText(/connexion/i)).toBeInTheDocument();

  // Vérifie que le texte de bienvenue est affiché
  expect(
    screen.getByText(/bienvenue à nouveau dans votre parcours de bien-être/i)
  ).toBeInTheDocument();
});
