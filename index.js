/**
 * @providesModule react-native-icloudstore
 */

import { NativeModules, Platform } from 'react-native';

export const iCloudStorage = Platform.OS === 'ios' ? NativeModules.RNICloudStorage : undefined;
