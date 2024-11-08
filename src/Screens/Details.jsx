import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropBox from '../Components/DropBox';
import {MyColors} from '../Utils/MyColors';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Redux/CartSlice';

const Details = ({route}) => {
  const StoreData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const productData = route.params?.main;
  const {name, pieces, price, img} = productData;
  console.log(name, price);
  const nav = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, gap: 20}}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          style={{
            height: '300',
            width: '100%',
            resizeMode: 'contain',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={{uri: img}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              nav.goBack();
            }}>
            <Image
              style={{tintColor: 'black', height: 25, width: 25}}
              source={require('../assests/back.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{tintColor: 'black', height: 25, width: 25}}
              source={require('../assests/share.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: 600}}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <Icon
            name="heart-o"
            style={{color: 'black'}}
            size={30}
            color="#900"
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 5,
          fontSize: 15,
          color: 'grey',
          paddingHorizontal: 15,
        }}>
        {pieces},Price
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          paddingHorizontal: 15,
        }}>
        ₹{price}
      </Text>
      <DropBox />
      <View
        style={{
          flex: 0.9,
          justifyContent: 'flex-end',

          paddingHorizontal: 15,
        }}>
        {StoreData.some(value => value.name == productData.name) ? (
          <TouchableOpacity
            disabled={true}
            activeOpacity={0.8}
            style={{
              backgroundColor: 'grey',
              borderRadius: 10,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
              }}>
              Added to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(productData));
              nav.navigate('Cart');
            }}
            activeOpacity={0.8}
            style={{
              backgroundColor: MyColors.primary,
              borderRadius: 10,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
              }}>
              Add to Basket
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Details;
