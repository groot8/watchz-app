import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Anime = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#445566' }}>Coming soon ...</Text>
    </View>
  );
};

export default Anime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D242B',
  },
});
