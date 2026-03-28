describe('Exercícios para praticar', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });
  it('Consegue deletar todas as tarefas', () => {
    cy.get(':nth-child(1) > .view > .toggle').click();
    cy.contains('Clear completed').click();
    cy.get('.toggle').click();
    cy.contains('Clear completed').click();
    cy.get('[data-test="new-todo"]')
      .should('have.length', 1)
      .should('not.have.text', 'Pay electric bill')
      .should('not.have.text', 'Walk the dog');
    cy.contains('Clear completed').should('not.exist');
  });

  it('Para filtrar tarefas completas', () => {
    cy.contains('Active').click();

    cy.get('.todo-list li')
      .should('have.length', 2)
      .first()
      .should('have.text', 'Pay electric bill');

    cy.contains('Walk the dog').should('exist');
  });
});
