import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

export const Controls = ({ countDownStatus, onControlsPress }) => {
  const renderControlButton = () => {
    if (countDownStatus === 'started') {
      return (
        <Button
          onPress={() => onControlsPress("paused")}
          title="Pause"
        />
      )
    }
    return (
      <Button
        onPress={() => onControlsPress("started")}
        title="Start"
      />
    )
  }
  return (
    <View>
      {renderControlButton()}
      <Button
        onPress={() => onControlsPress("stopped")}
        title="Reset"
      />
    </View>

  );
}


Controls.propTypes = {
  countDownStatus: PropTypes.string.isRequired,
  onControlsPress: PropTypes.func.isRequired
};
