import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HomeIcon from '../Components/HomeIcon';
import HomeSearch from '../Components/HomeSearch';
import HomeBanner from '../Components/HomeBanner';
import ProductsTitle from '../Components/ProductsTitle';
import ProductCarousel from '../Components/ProductCarousel';
import {fruits, vegetables} from '../Utils/Data';
import ExtraButtom from '../Components/ExtraButtom';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 20, paddingTop: 10}}>
        <View style={{gap: 20}}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductsTitle title="Exclusive Offer" />
          <ProductCarousel data={fruits} />
          <ProductsTitle title="Best Selling" />
          <ProductCarousel data={vegetables} />
          <ExtraButtom />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
