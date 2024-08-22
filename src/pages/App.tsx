import React from 'react';

import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavIcon from '../components/BottomNavIcon.tsx';
import VehiclesPage from './VehiclesPage.tsx';
import GaragePage from './GaragePage.tsx';
import HomePage from './HomePage.tsx';
import SettingsPage from './SettingsPage.tsx';
import ProfilePage from './ProfilePage.tsx';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
              tabBarShowLabel: false,
              headerShown : false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 10,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                height: 80,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 10, height: 10 },
                    shadowOpacity: 0.4,
                    shadowRadius: 20,
                  },
                  android: {
                    elevation: 15,
                  },
                }),
              },
            }}>

            <Tab.Screen name="Vehicles" component={VehiclesPage} options={{tabBarIcon: ({ focused }) => <BottomNavIcon title={'Vehicles'} icon={'commute'} focused={focused}/>,}} />
            <Tab.Screen name="Garages" component={GaragePage} options={{tabBarIcon: ({ focused }) => <BottomNavIcon title={'Garages'} icon={'warehouse'} focused={focused}/>}} />
            <Tab.Screen name="Home" component={HomePage} options={{tabBarIcon: ({ focused }) => <BottomNavIcon title={'Home'} icon={'home'} focused={focused} size={35}/>}}/>
            <Tab.Screen name="Settings" component={SettingsPage} options={{tabBarIcon: ({ focused }) => <BottomNavIcon title={'Settings'} icon={'settings'} focused={focused}/>}}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{tabBarIcon: ({ focused }) => <BottomNavIcon title={'Profile'} icon={'person'} focused={focused}/>}}/>

        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
