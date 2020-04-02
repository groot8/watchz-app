import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Movies from './Movies';
import Series from './Series';
import Anime from './Anime';
import ItemDetails from './ItemDetails';
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()
const moviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name='Moives'
      component = {Movies}
      options={{
      headerShown: false
    }}
    />
    <Stack.Screen 
      name='ItemDetails'
      component = {ItemDetails}
      options={{
      // headerShown: false
    }}
    />
  </Stack.Navigator>)
const seriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name='Moives'
      component = {Series}
      options={{
      headerShown: false
    }}
    />
    <Stack.Screen 
      name='ItemDetails'
      component = {ItemDetails}
      options={{
      // headerShown: false
    }}
    />
  </Stack.Navigator>)
const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator
      barStyle={{
        backgroundColor: '#14181C',
        paddingBottom: 5,
        paddingTop: 5,
      }}
      activeColor={'#55B02C'}
    >
      <MaterialBottomTabs.Screen
        name="Movies"
        // component={Movies}
        children={moviesStack}
        options={{
          tabBarLabel: 'Movies',
          activeTintColor: 'blue',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              color={color}
              focused={focused}
              size={25}
              name={'local-movies'}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Series"
        // component={Series}
        children={seriesStack}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              color={color}
              focused={focused}
              size={25}
              name={'live-tv'}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Anime"
        component={Anime}
        options={{
          tabBarLabel: 'Anime',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              color={color}
              focused={focused}
              size={25}
              name={'movie-filter'}
            />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

const Container = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>{createBottomTabs()}</NavigationContainer>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D242B',
  },
});
