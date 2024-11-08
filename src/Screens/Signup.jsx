import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {MyColors} from '../Utils/MyColors';
import {useNavigation} from '@react-navigation/native';
import {authentication, database} from '../../FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = () => {
  const [isVisible, setisVisible] = useState(true);
  const [userCredentials, setuserCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {email, password, name} = userCredentials;
  const uid = uuid.v4();
  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.navigate('Login');
        setDoc(doc(database, 'users', uid), {
          username: name,
          email: email,
          id: authentication.currentUser.uid,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const nav = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: MyColors.secondary}}>
      <StatusBar />
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
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Sign Up</Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: 'grey',
              marginTop: 10,
            }}>
            Enter your credentials to continue
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: 'grey',
              marginTop: 40,
            }}>
            Username
          </Text>
          <TextInput
            maxLength={9}
            value={name}
            onChangeText={val => {
              setuserCredentials({...userCredentials, name: val});
            }}
            keyboardType="name-phone-pad"
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
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={val => {
              setuserCredentials({...userCredentials, email: val});
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
                setuserCredentials({...userCredentials, password: val});
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
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: 'black',
              marginTop: 15,
              lineHeight: 25,
              width: '95%',
              opacity: 0.7,
            }}>
            By Continuing you are agreeing to out Terms and Services and Privacy
            Policy
          </Text>

          <TouchableOpacity
            onPress={userAccount}
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
              SignUp
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
            <Text style={{fontSize: 16}}>Already Have an Account??</Text>
            <TouchableOpacity onPress={() => nav.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  color: MyColors.primary,
                  fontWeight: 700,
                }}>
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
