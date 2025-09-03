describe('React App Routes', () => {
    const routes = [
        { path: '/', text: 'Connexion' },
        { path: '/home', text: 'Home' },
        { path: '/profile', text: 'Profile' },
        { path: '/activities', text: 'Activities' },
    ];

    routes.forEach(({ path, text }) => {
        it(`should render the ${text} page for route ${path}`, () => {
            // On visite la route spécifique directement
            cy.visit(`http://localhost:8080${path}`);

            // Vérifie que le texte attendu est visible
            cy.contains(text).should('be.visible');
        });
    });
});
