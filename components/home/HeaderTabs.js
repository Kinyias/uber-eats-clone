import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HeaderTabs(props) {
  const setActiveTabAndLoading = (text) => {
    props.setActiveTab(text);
    props.setLoading(true);
  };
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        setActiveTabAndLoading={setActiveTabAndLoading}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        setActiveTabAndLoading={setActiveTabAndLoading}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
  setActiveTabAndLoading
}) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginTop: 2,
      }}
      onPress={() => {
        setActiveTabAndLoading(text);
      }}
    >
      <Text
        style={{
          color: activeTab === text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
