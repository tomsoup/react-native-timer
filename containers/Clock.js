import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { formatSeconds } from '../helpers/Helpers';

export const Clock = ({ totalSeconds = 0}) => {

    return (
      <View style={{
        backgroundColor: 'rgba(8, 214, 160, 0.5)',
        paddingHorizontal: 60,
        paddingVertical: 85,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: '#92b5ac'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 34
        }}>
          {formatSeconds(totalSeconds)}
        </Text>
      </View>
    );
}


Clock.propTypes = {
  totalSeconds: PropTypes.number
};
