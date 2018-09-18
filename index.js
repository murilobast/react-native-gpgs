
import { NativeModules, DeviceEventEmitter } from 'react-native';

const { RNGPGSAuth, RNGPGSPlayer, RNGPGSAchievement, RNGPGSLeaderboard } = NativeModules;

RNGPGSAuth.onAuthStateChanged = (callback) => {
    return DeviceEventEmitter.addListener(RNGPGSAuth.AUTH_STATE_CHANGE_EVENT, isSignedIn => {
        callback(isSignedIn)
    });
} 

export { RNGPGSAuth, RNGPGSPlayer, RNGPGSAchievement, RNGPGSLeaderboard };