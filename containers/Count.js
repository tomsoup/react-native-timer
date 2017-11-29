import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Clock, ClockForm, Controls } from './components';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '',
      totalSeconds: 0,
      countDownStatus: 'stopped'
    };
  }

  /**
   * Start counting base on life cycle method,
   * @const {number} 1000 1 sec
   *
   */
  startCounting = () => {
    this.timer = setInterval(() => {
      let countingDown = this.state.totalSeconds - 1;
      this.setState({
        totalSeconds: countingDown >= 0 ? countingDown : 0
      })
    }, 1000);
  }

  stopCounting = () => {
    this.setState({
      totalSeconds: 0
    });
  }

  pauseCount = () => {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.countDownStatus);
    if (this.state.countDownStatus !== prevState.countDownStatus) {
      switch(this.state.countDownStatus) {
        case 'started':
          return this.startCounting();
        case 'paused':
          return this.pauseCount();
        case 'stopped':
          return this.stopCounting();
        default:
          return this.stopCounting();
      }
    }
  }



  /**
   * update states from clock form submit
   * @param  {string} seconds
   * @return {object} totalSeconds, seconds, countDownStatus
   */

  onFormSubmit = (totalSeconds) => {
    if (totalSeconds.match(/^[0-9]*$/)) {
      const intTotalSeconds = parseInt(totalSeconds, 10);
      console.log('submit valid');
      this.setState({
        totalSeconds: intTotalSeconds,
        seconds: '',
        countDownStatus: 'started'
       });
    }
  }

  /**
   * update props from clock form input
   * @param  {string} seconds
   */

  onInputChange = (seconds) => {
    this.setState({seconds});
  }

  onControlsPress = (countDownStatus) => {
      this.setState({countDownStatus});
  }


  render() {
    const { seconds, totalSeconds, countDownStatus } = this.state;
    const renderControls = () => {
      if (countDownStatus !== 'stopped') {
        return (
          <Controls countDownStatus={countDownStatus} onControlsPress={this.onControlsPress} />
        );
      }
    }
    return (
      <View>
      <Clock totalSeconds={totalSeconds} />
      <ClockForm
        seconds={seconds} onType={this.onInputChange} onFormSubmit={this.onFormSubmit}
      />
      {renderControls()}
      </View>
    )
  }
}
