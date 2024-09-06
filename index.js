/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './views/Home';

Navigation.registerComponent('Home', () => Home);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: '#000000',
    style: 'light',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'carved',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
