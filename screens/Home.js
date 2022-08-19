import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import AnimatedLottieView from 'lottie-react-native';

const YELP_API_KEY =
  'miGFBuO85lEh1fcGKInYUtDmk4lu8gn0szCtI5-78N7U5vH4avD6_nV1zqFn9P6wFTRdYoPWpCsEWcjVncOYOQ9gtB8WmUkvksq9ZnZaouVN3vK3eUQ30a3KafHwYnYx';

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('chicago');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .then((json) => setLoading(false))
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} loading={loading} setLoading={setLoading} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {loading ? (
          <View style={{ height: 500, justifyContent: 'center' }}>
            <AnimatedLottieView
              style={{ height: 200, alignSelf: 'center', marginBottom: 30 }}
              source={require('../asset/animations/scanner.json')}
              autoPlay
              loop
            />
          </View>
        ) : (
          <RestaurantItem
            restaurantData={restaurantData}
            navigation={navigation}
          />
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
