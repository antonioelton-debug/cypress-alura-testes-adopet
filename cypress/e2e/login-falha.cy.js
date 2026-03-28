describe('Login com falha', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      'POST',
      'https://adopet-api-i8qu.onrender.com/adotante/login',
      {
        statusCode: 400,
      },
    ).as('stubPost');
  });

  it('Deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
    /* cy.get('[data-test="input-loginEmail"]').type('elton@elton.com');
    cy.get('[data-test="input-loginPassword"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click(); */

    // Refatorado
    cy.login('elton@elton.com', 'Teste123');
    cy.contains('Falha no login. Consulte suas credenciais.').should(
      'be.visible',
    );
  });

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('antonioelton81@email.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should(
      'be.visible',
    );
  });
});
