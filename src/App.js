/**
 * @Author: jjm <ivokc>
 * @Date:   2017-12-05T16:00:12+08:00
 * @Email:  jijm@bosc.cn
 * @Project: JJMproject
 * @Filename: App.js
 * @Last modified by:   jjm
 * @Last modified time: 2017-12-14T17:02:04+08:00
 */



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import './main/constant/Color';
import InitializeConfig from './main/initialize/InitializeConfig'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class JJMApp extends Component<{}> {

  componentWillMount() {
      InitializeConfig.setupAppConfiguration();
  }

  render() {
    alert('aaaaaa');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});