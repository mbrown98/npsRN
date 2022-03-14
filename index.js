/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import AppDataWrapper from './AppDataWrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppDataWrapper);
