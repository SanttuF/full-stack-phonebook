describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('add')
  })
})
