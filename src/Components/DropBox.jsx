import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from '../Utils/Data';
import Icon from 'react-native-vector-icons/FontAwesome';

const DropBox = () => {
  const [myIndex, setmyIndex] = useState();
  const [toggle, settoggle] = useState(false);
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        style={{paddingHorizontal: 15}}
        data={Dropdown}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setmyIndex(index);
                settoggle(!toggle);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: '#E3E3E3',
                borderBottomWidth: 1,
                marginBottom: 10,
                paddingVertical: 10,
              }}>
              <Text>{item.title}</Text>
              <Icon
                name={
                  myIndex === index && toggle ? 'arrow-down' : 'arrow-right'
                }
                style={{color: 'black'}}
                size={22}
                color="#400"
              />
            </TouchableOpacity>
            {myIndex === index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default DropBox;
