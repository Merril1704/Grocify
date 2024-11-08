import {View, Text, Image} from 'react-native';
import React from 'react';

const HomeIcon = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: 40, width: 45}}
        source={require('../assests/mainIcon.png')}
      />
    </View>
  );
};

export default HomeIcon;
