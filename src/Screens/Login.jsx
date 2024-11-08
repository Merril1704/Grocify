import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyColors} from '../Utils/MyColors';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authentication} from '../../FirebaseConfig';

const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setloginCredentials] = useState({
    email: '',
    password: '',
  });
  const [isVisible, setisVisible] = useState(true);
  const {email, password} = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(val => {
        nav.replace('Home');
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: MyColors.secondary}}>
      <ScrollView style={{flex: 1, paddingTop: 30}}>
        <Image
          style={{
            height: 60,
            width: 60,
            alignSelf: 'center',
          }}
          source={require('../assests/mainIcon.png')}
        />

        <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Loging</Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: 'grey',
              marginTop: 10,
            }}>
            Enter your emails and password
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: 'grey',
              marginTop: 40,
            }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={val => {
              setloginCredentials({...loginCredentials, email: val});
            }}
            keyboardType="email-address"
            style={{
              borderColor: 'E3E3E3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}></TextInput>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: 'grey',
              marginTop: 30,
            }}>
            Password
          </Text>
          <View
            style={{
              borderColor: 'E3E3E3',
              borderBottomWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              value={password}
              onChangeText={val => {
                setloginCredentials({...loginCredentials, password: val});
              }}
              secureTextEntry={isVisible}
              maxLength={6}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,
                marginTop: 15,
                flex: 0.8,
              }}
            />
            <TouchableOpacity onPress={() => setisVisible(!isVisible)}>
              <Image
                style={{height: 40, width: 40, marginTop: 15}}
                source={require('../assests/hidden.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: 'black',
              marginTop: 15,
              textAlign: 'right',
            }}>
            Forgot Password
          </Text>

          <TouchableOpacity
            onPress={loginUser}
            style={{
              backgroundColor: MyColors.primary,
              height: 70,
              marginTop: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: MyColors.secondary,
                fontWeight: 500,
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 13,
              gap: 5,
            }}>
            <Text style={{fontSize: 16}}>Dont Have an Account??</Text>
            <TouchableOpacity onPress={() => nav.navigate('Signup')}>
              <Text
                style={{
                  fontSize: 16,
                  color: MyColors.primary,
                  fontWeight: 700,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
