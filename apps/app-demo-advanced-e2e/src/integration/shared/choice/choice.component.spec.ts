describe('app-demo-advanced', () => {
  beforeEach(() => cy.visit('/iframe.html?id=choicecomponent--primary'));
  it('should render the component', () => {
    cy.get('eyassu-ng-choice').should('exist');
  });
});