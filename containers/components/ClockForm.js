import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export const ClockForm = ({seconds, onType, onFormSubmit}) => {

  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, borderRadius: 30, paddingLeft: 10, backgroundColor: '#ffffff' }}
      onChangeText={(value) => onType(value)}
      value={seconds}
      />
    <Button
      onPress={() => onFormSubmit(seconds)}
      title="Submit"
      color="#841584"
      accessibilityLabel="Click to search weather"
    />
  </View>
  );
}

const styles = {
  containerStyle: {
    paddingTop: 20,
    alignItems: 'center'
  }
};
