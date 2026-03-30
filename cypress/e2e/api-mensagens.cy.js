describe('Api Adopet', () => {
  //const tempoEsperado = Math.random() * 1000; // Flaky test
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNzkyNTY5MC1lOTk2LTQxZjgtOWQ4NC04YzljOWZmOGJiNGYiLCJhZG9wdGVyTmFtZSI6IkFudG9uaW8gRWx0b24iLCJpYXQiOjE3NzQ4NzMyOTMsImV4cCI6MTc3NTEzMjQ5M30.ceTvVqehLssOSaV-9j5XUwsGjdO-HoPJ1op_Fa0pYSg`;

  it('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/17925690-e996-41f8-9d84-8c9c9ff8bb4f',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
      //expect(res.duration).to.be.lte(tempoEsperado); // Flaky test
    });
  });
});
