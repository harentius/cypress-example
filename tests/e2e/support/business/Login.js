import Navigation from '../driver/Navigation';
import Form from '../driver/Form';
import Page from '../driver/Page';

class Login
{
  static open()
  {
    Navigation.visit('/login')
  }

  static fillCredentials(username, password)
  {
    Form.fill('#login_field', username);
    Form.fill('#password', password);
  }

  static submitForm()
  {
    Form.submit('form');
  }

  static assertNotification(notification)
  {
    Page.assertElementContains('.flash', notification)
  }
}

export default Login
