import './components/button';
import './components/input';
import './components/inputProfile';
import './components/buttonProfile';
import './components/modal';
import navigationPage from './index.hbs';
import loginPage from './pages/login'
import chatPage from './pages/chat'
import chatWithDialog from './pages/chat-with-dialog'
import registrationPage from './pages/registration'
import page404 from'./pages/page-404'
import page500 from './pages/page-500'
import profile from './pages/profile'
import profileChangeData from './pages/profile-change-data'
import profileChangePassword from './pages/profile-change-password'

const pathName = window.location.pathname

const getPage = () => {
  switch (pathName) {
    case '/':
      return navigationPage();
    case '/login':
      return loginPage();
    case '/registration':
      return registrationPage();
    case '/chat':
      return chatPage();
    case '/chat-with-dialog':
      return chatWithDialog();
    case '/page-404':
      return page404();
    case '/page-500':
      return page500();
    case '/profile':
      return profile();
    case '/profile-change-data':
      return profileChangeData();
    case '/profile-change-password':
      return profileChangePassword();
    default:
      return page404();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  app.innerHTML = getPage();
});
