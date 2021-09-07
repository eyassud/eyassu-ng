describe('app-demo-advanced', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textareacomponent--primary'));
  it('should render the component', () => {
    cy.get('eyassu-ng-text-area').should('exist');
  });
});