import Homepage from '../support/business/Homepage';

describe('Homepage', () => {
  it("Contains 'Sign in' Button", () => {
    Homepage.open();
    Homepage.assertSignInButton();
  })
})
