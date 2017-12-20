/**
 * @Author: jjm
 * @Date:   2017-12-20T17:34:03+08:00
 * @Email:  jijm@bosc.cn
 * @Project: JJMproject
 * @Filename: SplashScreenUtility.js
 * @Last modified by:   jjm
 * @Last modified time: 2017-12-20T18:02:07+08:00
 */

import {SplashScreenModule} from '../../native-modules/NativeModules';

export default SplashScreenUtility = {

    hideSplashScreen() {
        SplashScreenModule.hideSplashScreen();
    },

    showSplashScreen() {
        SplashScreenModule.showSplashScreen();
    }

};
