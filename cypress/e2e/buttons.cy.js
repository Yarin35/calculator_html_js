describe('is server on', () => {
  it('text place is correct', () => {
    cy.visit('http://localhost/');
    cy.get('.calculator > #result');
  });

  it('button container are all correct', () => {
    cy.visit('http://localhost/');
    cy.get('.button-container > :nth-child(1)')
    cy.get('.button-container > :nth-child(2)');
    cy.get('.button-container > :nth-child(3)');
    cy.get('.button-container > :nth-child(4)');
  });

  it('buttons are correct', () => {
    cy.visit('http://localhost/');
    cy.get('.calculator input[type = button]');
    cy.get('[value = "1"]');
    cy.get('[value = "2"]');
    cy.get('[value = "3"]');
    cy.get('[value = "4"]');
    cy.get('[value = "5"]');
    cy.get('[value = "6"]');
    cy.get('[value = "7"]');
    cy.get('[value = "8"]');
    cy.get('[value = "9"]');
    cy.get('[value = "0"]');
    cy.get('[value = "+"]');
    cy.get('[value = "-"]');
    cy.get('[value = "*"]');
    cy.get('[value = "/"]');
  });
})