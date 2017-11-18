import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clock, ClockForm } from './components';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: '', totalSeconds: 0 };
  }

  onFormSubmit = (totalSeconds) => {
    if (totalSeconds.match(/^[0-9]*$/)) {
      const intTotalSeconds = parseInt(totalSeconds.slice(), 10);
      this.setState({totalSeconds: intTotalSeconds, seconds: '' });
    }
  }

  onInputChange = (seconds) => {
    this.setState({seconds});
  }


  render() {
    const { seconds, totalSeconds } = this.state;
    return (
      <View>
      <Clock totalSeconds={totalSeconds} />
      <ClockForm
        seconds={seconds} onType={this.onInputChange} onFormSubmit={this.onFormSubmit}
      />
      </View>
    )
  }
}
