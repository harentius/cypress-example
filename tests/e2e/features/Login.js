import Login from '../support/business/Login';

describe('Login', () => {
  it("Login with wrong credentials shows error message", () => {
    Login.open();

    Login.fillCredentials('wrong_name', 'wrong_password');
    Login.submitForm();

    Login.assertNotification('Incorrect username or password.');
  })
})
