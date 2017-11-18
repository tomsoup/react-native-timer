import React, { Component } from 'React';
import { StyleSheet, Text, View } from 'react-native';
import Count from './Count';
import Timer from './Timer';


export default class Main extends Component {
  render () {
    return  (
      <View>
        <Count />
      </View>
    );
  }
}
