import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {View, Text} from 'react-native';

export default function BottomNavIcon({focused, icon, title, size}: {focused: boolean, icon: string, title: string, size?: number | null}) {
  return(<View>
            <Icon style={{alignSelf: 'center'}} name={icon} color={ focused ? 'green' : 'black' } size={ size || 25 }/>
            {focused && <Text style={{color: 'green', textAlign: 'center'}}>{title}</Text>}
        </View>);
}
