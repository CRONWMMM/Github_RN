/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './js/page/HomePage'
import WelcomePage from './js/page/WelcomePage'
import DetailPage from './js/page/DetailPage'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DetailPage);
