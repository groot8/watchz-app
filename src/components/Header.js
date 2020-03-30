import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../../assets/popcorn.svg';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/popcorn.png')} style={styles.logo} />
      <Text style={styles.title}>Watchz Diary</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 90,
    backgroundColor: '#14181C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#E5E8EC',
    marginLeft: 20,
  },
  logo: {
    width: 60,
    height: 70,
  },
});
