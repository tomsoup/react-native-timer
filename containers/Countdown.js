import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clock } from './Clock';

export default class Countdown extends Component {
  render() {
    return (
      <View>
      <Clock totalSeconds={122} />
      </View>
    )
  }
}
