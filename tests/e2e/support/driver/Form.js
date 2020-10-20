class Form
{
  static fill(selector, text) {
    cy.get(selector).type(text);
  }

  static submit(selector) {
    cy.get(selector).get('input[type="submit"]').click();
  }
}

export default Form
