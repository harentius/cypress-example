import Navigation from '../driver/Navigation';
import Page from '../driver/Page';

class Homepage {
  static open()
  {
    Navigation.visit('/');
  }

  static assertSignInButton()
  {
    Page.assertElementContains('a[href="/login"]', 'Sign in');
  }
}

export default Homepage;
