import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fruits} from '../Utils/Data';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {MyColors} from '../Utils/MyColors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../../Redux/CartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCarousel = ({data}) => {
  const dispatch = useDispatch();
  const StoreData = useSelector(state => state.cart);
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate('Details', {
                main: item,
              });
            }}
            activeOpacity={0.9}
            style={{
              height: responsiveHeight(30),
              borderColor: '#E3E3E3',
              borderWidth: 2,
              width: responsiveWidth(50),
              marginRight: 15,
              borderRadius: 15,
            }}>
            <Image
              style={{height: 120, resizeMode: 'contain'}}
              source={{uri: item.img}}
            />
            <View style={{paddingHorizontal: 10, gap: 3}}>
              <Text style={{fontSize: 18, fontWeight: 600}}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{color: 'grey'}}>{item.pieces} Priceg</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  ₹ {item.price}
                </Text>
                {StoreData.some(value => value.name == item.name) ? (
                  <Icon
                    name="minus-circle"
                    style={{color: 'grey'}}
                    size={35}
                    color={MyColors.primary}
                    onPress={() => {
                      if (item.quantity === 10) {
                      } else {
                        dispatch(removeFromCart(item));
                      }
                    }}
                  />
                ) : (
                  <Icon
                    name="plus-circle"
                    style={{color: 'grey'}}
                    size={35}
                    color={MyColors.primary}
                    onPress={() => {
                      if (item.quantity === 10) {
                      } else {
                        dispatch(addToCart(item));
                      }
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductCarousel;
