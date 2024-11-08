import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MyColors} from '../Utils/MyColors';

const ExtraButtom = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Cart');
      }}
      activeOpacity={0.8}
      style={{
        backgroundColor: MyColors.primary,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.99,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 40}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
          }}>
          Go to Checkout
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExtraButtom;
