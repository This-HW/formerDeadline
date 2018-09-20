/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import DeadlineList from './src/screens/DeadlineList';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => DeadlineList);