import React from 'react';

import {StyleSheet, View, Text, Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 10,
                backgroundColor: '#ffffff',
                borderRadius: 10,
                height: 80,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
                  },
                  android: {
                    elevation: 15,
                  },
                }),
              },
            }}
        >
            <Tab.Screen
                name="Vehicles"
                component={() => <Text>Vehicles</Text>}
                options={{
                    tabBarIcon: ({ focused }) => (<View>
                        <Icon style={{alignSelf: "center"}} name="commute" color={ focused ? "green": "black" } size={ focused ? 25: 25 }/>
                        {focused && <Text style={{color: "green", textAlign: "center"}}>Vehicles</Text>}
                    </View>),
                }}
            />
            <Tab.Screen
                name="Garages"
                component={() => <Text>Garages</Text>}
                options={{
                    tabBarIcon: ({ focused }) => (<View>
                        <Icon style={{alignSelf: "center"}} name="warehouse" color={ focused ? "green": "black" } size={ focused ? 25: 25 }/>
                        {focused && <Text style={{color: "green", textAlign: "center"}}>Garages</Text>}
                    </View>),
                }}
            />
            <Tab.Screen
                name="Home"
                component={() => <Text>Home</Text>}
                options={{
                    tabBarIcon: ({ focused }) => (<View>
                        <Icon style={{alignSelf: "center"}} name="home" color={ focused ? "green": "black" } size={ focused ? 30: 30 }/>
                        {focused && <Text style={{color: "green", textAlign: "center"}}>Home</Text>}
                    </View>),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={() => <Text>Settings</Text>}
                options={{
                    tabBarIcon: ({ focused }) => (<View>
                        <Icon style={{alignSelf: "center"}} name="settings" color={ focused ? "green": "black" } size={ focused ? 25: 25 }/>
                        {focused && <Text style={{color: "green", textAlign: "center"}}>Settings</Text>}
                    </View>),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={() => <Text>Profile</Text>}
                options={{
                    tabBarIcon: ({ focused }) => (<View>
                        <Icon style={{alignSelf: "center"}} name="person" color={ focused ? "green": "black" } size={ focused ? 25: 25 }/>
                        {focused && <Text style={{color: "green", textAlign: "center"}}>Profile</Text>}
                    </View>),
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
