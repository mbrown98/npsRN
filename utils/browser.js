import {Linking, Alert} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {COLORS} from '../constants';

const BROWSER = {
  openBrowser: async url => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          preferredBarTintColor: COLORS.darkGreen,
          preferredControlTintColor: 'white',
          modalTransitionStyle: 'coverVertical',
          animated: true,
        });
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      Alert.alert('Unable to open link');
    }
  },
};

export default BROWSER;
