describe('app-demo-advanced', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dropdowncomponent--primary'));
  it('should render the component', () => {
    cy.get('eyassu-ng-drop-down').should('exist');
  });
});