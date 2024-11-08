import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyColors} from '../Utils/MyColors';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../Redux/CartSlice';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const StoreData = useSelector(state => state.cart);
  console.log(StoreData);

  let amount = 0;
  StoreData.forEach(element => {
    amount += element.price;
  });
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10, gap: 10}}>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '500'}}>
        My Cart
      </Text>
      <TouchableOpacity
        onPress={() => {
          nav.goBack();
        }}>
        <Image
          style={{tintColor: 'black', height: 25, width: 25}}
          source={require('../assests/back.png')}
        />
      </TouchableOpacity>

      <View style={{flex: 0.99, justifyContent: 'flex-end'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={StoreData}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: responsiveHeight(18),
                  borderBottomWidth: 2,
                  borderBottomColor: '#E3E3E3',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                {/* child 1 container */}
                <View
                  style={{
                    flex: 0.35,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{height: 120, width: 120, resizeMode: 'contain'}}
                    source={{
                      uri: item.img,
                    }}
                  />
                </View>
                {/* child 1 container */}

                {/* child 2 container */}
                <View
                  style={{
                    flex: 0.7,
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 20, fontWeight: '600'}}>
                      {item.name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(removeFromCart(item));
                      }}>
                      <Icon
                        name="close"
                        style={{color: 'grey'}}
                        size={25}
                        color="#900"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={{fontSize: 17, color: 'grey', marginTop: 5}}>
                    {item.pieces},price
                  </Text>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    {/* Quantity container */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <Icon
                        name="minus-square-o"
                        style={{color: 'grey'}}
                        size={35}
                        color={MyColors.primary}
                        onPress={() => {
                          dispatch(decrementQuantity(item));
                        }}
                      />
                      <Text style={{fontSize: 17}}>{item.quantity}</Text>
                      <Icon
                        name="plus-square-o"
                        style={{color: 'grey'}}
                        size={35}
                        color={MyColors.primary}
                        onPress={() => {
                          if (item.quantity === 10) {
                          } else {
                            dispatch(incrementQuantity(item));
                          }
                        }}
                      />
                    </View>
                    {/* Quantity container */}
                    <Text style={{fontSize: 17, fontWeight: '600'}}>
                      ₹{item.quantity * item.price}
                    </Text>
                  </View>
                </View>
                {/* child 2 container */}
              </View>
            );
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('OrderPlaced');
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: MyColors.primary,
            borderRadius: 10,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
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
            <Text style={{fontSize: 15, fontWeight: 500, color: 'white'}}>
              ₹{amount}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
