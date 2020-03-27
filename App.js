import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Movies from './src/components/Movies';
import { CustomStatusBar } from './src/components/CustomStatusBar';
import Header from './src/components/Header';

export default function App() {
  return (
    <Provider store={store}>
      {/* <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#00BCD4"
        //Background color of statusBar only works for Android
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      /> */}
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <Header />
        <Movies></Movies>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D242B',
  },
  statusbar: {
    height: 30,
    backgroundColor: '#1D242B',
  },
});
