import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: 'Chicken parm',
    description:
      'Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato sauce drizzled over the top of a chicken fillet ',
    price: '$20.50',
    image:
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170920150817-chicken-parm.jpg',
  },
  {
    title: 'Fajitas',
    description:
      'This assembly kit of a dining experience is a thrill to DIY enthusiasts everywhere',
    price: '$10.50',
    image:
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170203151539-fajitas.jpg',
  },
  {
    title: 'Butter garlic crab',
    description:
      'This one claims no roots in Chinese, Continental or Indian cuisines',
    price: '$23.50',
    image:
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302153529-garlic-crab.jpg',
  },
  {
    title: 'Lasagna',
    description: `Second only to pizza in the list of famed Italian foods`,
    price: '$19.50',
    image:
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140430115517-06-comfort-foods.jpg',
  },
  {
    title: 'Donuts',
    description:
      'These all-American fried wheels of dough need no introduction',
    price: '$12.50',
    image:
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170228165934-donuts.jpg',
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation} />
    </View>
  );
}
