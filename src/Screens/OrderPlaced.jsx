import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MyColors} from '../Utils/MyColors';
import {useNavigation} from '@react-navigation/native';

const OrderPlaced = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'white'} />
      <Icon name="verified" size={90} color={'green'} />
      <Text style={{fontSize: 16, fontWeight: 200, color: 'E3E3E3'}}>
        Congratulations Your order was placed Sucessfully
      </Text>
    </View>
  );
};

export default OrderPlaced;
