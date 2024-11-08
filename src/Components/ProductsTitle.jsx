import {View, Text} from 'react-native';
import React from 'react';
import {MyColors} from '../Utils/MyColors';

const ProductsTitle = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 600}}>{title}</Text>
      <Text style={{fontSize: 16, color: MyColors.primary, fontWeight: 600}}>
        See All
      </Text>
    </View>
  );
};

export default ProductsTitle;
