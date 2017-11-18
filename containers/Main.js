import React, { Component } from 'React';
import { StyleSheet, Text, View } from 'react-native';
import Countdown from './Countdown';
import Timer from './Timer';


export default class Main extends Component {
  render () {
    return  (
      <View>
        <Countdown />
      </View>
    );
  }
}
