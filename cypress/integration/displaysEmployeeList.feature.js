describe('Displays list of employees', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  
  it('when user visits the page', () => {
    cy.get('[data-cy="header"]').should('contain', 'Employee List')
  });

  it('user can see a list of 5 employees', () => {
    cy.get('[data-cy="main-container"]').within(() => {
      cy.get('[data-cy="list"]').should('have.length', 5)
    })
  });
})
