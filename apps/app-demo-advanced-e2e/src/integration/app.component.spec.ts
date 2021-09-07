describe('app-demo-advanced', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('eyassu-ng-root').should('exist');
  });
});