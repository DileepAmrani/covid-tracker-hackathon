import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Splash, Country, Global, About} from './../Screens';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ShowTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contry"
        component={Country}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  width: 30,
                  height: 30,
                  paddingBottom: 3,
                }}>
                <Entypo name="flag" size={30} color="black" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Global"
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  width: 30,
                  height: 30,
                  paddingBottom: 3,
                }}>
                <Entypo name="globe" size={30} color="black" />
              </View>
            );
          },
        }}
        component={Global}
      />
      <Tab.Screen name="About"
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <View
              style={{
                width: 30,
                height: 30,
                paddingBottom: 3,
              }}>
                <Entypo name="info-with-circle" size={30} color="black" />
            </View>
          );
        },
      }} component={About} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
             headerShown: false,
            }}
        />
        <Stack.Screen
          options={{
            headerLeft: false,
            headerTitle: 'COVID Tracker',
          }}
          name="Main Tab"
          component={ShowTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
