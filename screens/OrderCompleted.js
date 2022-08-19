import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import Lottie from 'lottie-react-native';
import MenuItem from '../components/restaurantDetail/MenuItem';

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.seletedItems
  );

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Lottie
        style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
        source={require('../asset/animations/check-mark.json')}
        autoPlay
        loop={false}
      />
      <Text style={{ fontWeight: '600', fontSize: 20, textAlign: 'center' }}>
        Your order at {restaurantName} has been placed for {'$' + totalUSD}
      </Text>
      <ScrollView>
        <MenuItem foods={items} hideCheckbox={true} />
        <Lottie
          style={{ height: 200, alignSelf: 'center', marginBottom: 30 }}
          source={require('../asset/animations/cooking.json')}
          autoPlay
          loop
        />
      </ScrollView>
    </SafeAreaView>
  );
}
