class Page {
  static click(text) {
    cy.contains(text).click();
  }

  static clickElement(selector, text) {
    let e = cy.get(selector);

    if (text !== null) {
      e = e.contains(text);
    }

    e.click();
  }

  static assertContains(text) {
    return cy.contains(text);
  }

  static assertElementContains(selector, text) {
    return cy.get(selector).contains(text);
  }
}

export default Page;
