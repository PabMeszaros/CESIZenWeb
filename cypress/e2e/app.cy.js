describe('React App routes', () => {
    const routes = [
        { path: '/', title: 'Login' },
        { path: '/home', title: 'Home' },
        { path: '/profile', title: 'Profile' },
        { path: '/activities', title: 'Activities' },
    ];

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    routes.forEach(({ path, title }) => {
        it(`loads ${title} page`, () => {
            cy.visit(`http://localhost:8080${path}`);
            cy.contains(title).should('exist');
        });
    });
});
