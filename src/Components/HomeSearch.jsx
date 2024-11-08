import React from 'react';
import {Image, View, TextInput} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

function HomeSearch() {
  return (
    <View
      style={{
        height: responsiveHeight(6),
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
      }}>
      <Image
        style={{height: 20, width: 20, tintColor: 'black'}}
        source={require('../assests/search-interface-symbol.png')}
      />
      <TextInput placeholder="Search Store" style={{flex: 1}} />
    </View>
  );
}

export default HomeSearch;
