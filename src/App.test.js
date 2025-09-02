import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Routes', () => {
  const routes = [
    { path: '/', text: 'Login' },
    { path: '/home', text: 'Home' },
    { path: '/profile', text: 'Profile' },
    { path: '/activities', text: 'Activities' },
    { path: '/psychology', text: 'Psychology' },
    { path: '/emotions', text: 'Emotions' },
    { path: '/stress', text: 'Stress' },
    { path: '/zen', text: 'Zen' },
    { path: '/mindfulness', text: 'Mindfulness' },
    { path: '/register', text: 'Register' },
  ];

  routes.forEach(({ path, text }) => {
    test(`renders ${text} page for route ${path}`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      );

      // Vérifie qu'un texte représentatif de la page existe
      expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });
  });
});
