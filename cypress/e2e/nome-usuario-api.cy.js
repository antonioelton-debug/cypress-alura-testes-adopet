describe('Api Adopet Perfil', () => {
  const authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNzkyNTY5MC1lOTk2LTQxZjgtOWQ4NC04YzljOWZmOGJiNGYiLCJhZG9wdGVyTmFtZSI6IkFudG9uaW8gRWx0b24iLCJpYXQiOjE3NzQ3MjUyNzAsImV4cCI6MTc3NDk4NDQ3MH0.Vh1aLPXrTCvXTYmTvD_5mDhFcxSmfkYpS-u-42TNWmA';

  it('Nome do Perfil', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/17925690-e996-41f8-9d84-8c9c9ff8bb4f',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('perfil');
      expect(res.body.perfil.nome).to.be.equal('Antonio Elton');
    });
  });
});
