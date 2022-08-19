import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
        <Icon opacity={1} icon="home" text="Home"/>
        <Icon opacity={0.5} icon="search" text="Browse"/>
        <Icon opacity={0.5} icon="shopping-bag" text="Grocery"/>
        <Icon opacity={0.5} icon="receipt" text="Orders"/>
        <Icon opacity={0.5} icon="user" text="Account"/>
    </View>
  );
}

const Icon = (props) => (
    <TouchableOpacity style={{opacity: props.opacity}}>
        <View>
            <FontAwesome5 name={props.icon} size={25} style={{
                marginBottom: 3,
                alignSelf:"center"
            }}/>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)