import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Header from './src/components/Header';
import Container from './src/components/Container';

export default function App() {
  const [activeTab, setActive] = useState('movies');
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <Header />
        <Container />
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
  bottomNav: {
    backgroundColor: '#1D242B',
  },
});
