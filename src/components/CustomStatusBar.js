import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';
export const CuatomStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
