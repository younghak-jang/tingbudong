'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Navigator } from 'react-native';

//import LoginScene from './Scenes';

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class tingbudong extends Component {
  render() {
    return (
        <Navigator
            style={styles.container}
            initialRoute={{
                title: '로그인', 
                component: LoginScene,
                index: 0
            }}
            renderScene={(route, navigator) => {
                return (
                    <LoginScene />
                )
            }}
        />
                
    )
  }
}

AppRegistry.registerComponent('tingbudong', () => tingbudong);