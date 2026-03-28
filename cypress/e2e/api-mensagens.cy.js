describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNzkyNTY5MC1lOTk2LTQxZjgtOWQ4NC04YzljOWZmOGJiNGYiLCJhZG9wdGVyTmFtZSI6IkFudG9uaW8gRWx0b24iLCJpYXQiOjE3NzQ3MjIxNzcsImV4cCI6MTc3NDk4MTM3N30.hZZTrRR4OusuJ4dQfG7cvzdY2UD-X2YXVS9AFgqxL84`;

  it('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/17925690-e996-41f8-9d84-8c9c9ff8bb4f',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
    });
  });
});
