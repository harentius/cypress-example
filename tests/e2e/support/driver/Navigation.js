class Navigation {
  static visit(url) {
    cy.visit(url);
  }

  static assertPageUrlIs(url) {
    cy.location().its('pathname').should('eq', url);
  }
}

export default Navigation;
