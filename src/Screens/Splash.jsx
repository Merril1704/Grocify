import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {MyColors} from '../Utils/MyColors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace('Signup');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: MyColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <StatusBar style="light" />
      <View
        style={{
          backgroundColor: 'lightgreen',
          height: 130,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
        }}>
        <Image
          style={{
            height: 60,
            width: 60,
            tintColor: 'white',
          }}
          source={require('../assests/mainIcon.png')}
        />
        <View>
          <Text style={{fontSize: 75, color: MyColors.secondary}}>Grocify</Text>
          <Text
            style={{
              fontSize: 18,
              color: MyColors.secondary,
              letterSpacing: 5,
              alignContent: 'center',
              fontWeight: 'bold',
              top: -10,
            }}>
            Now delivered in 30 mins
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
