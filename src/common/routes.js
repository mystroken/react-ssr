import AppContainer from './AppContainer';
import HomePage from './shared/pages/homepage';
import NotFoundPage from './shared/pages/notfound-page';
import AboutPage from './shared/pages/aboutpage';

export default [
  {
    ...AppContainer,
    routes: [
      {
        path: '/',
        exact: true,
        ...HomePage
      },
      {
        path: '/about',
        ...AboutPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
