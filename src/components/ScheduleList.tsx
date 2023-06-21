import React from 'react';
import {View, Text, Image, Switch, StyleSheet} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface propType {
  scheduleData: {
    icon: any;
    title: string;
    time: string;
    remainingTime: string;
  }[];
}

export default function scheduleList(props: propType) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <View>
      {props.scheduleData.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={item.icon} style={{width: 30, height: 30}} />
          <View>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              <Text style={{color: '#1D1617'}}>{item.title}</Text>
              <Text>, </Text>
              <Text style={{color: '#7B6F72'}}>{item.time}</Text>
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#7B6F72'}}>
              {item.remainingTime}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <EntypoIcon name="dots-three-vertical" size={14} />
            <Switch
              trackColor={{false: '#EEA4CE', true: '#C58BF2'}}
              thumbColor={toggle ? '#fff' : '#fff'}
              onValueChange={setToggle}
              value={toggle}
              style={{marginTop: 20}}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 315,
    height: 93,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 40,
      height: -10,
    },
    shadowOpacity: 0,
    shadowRadius: 20,
    elevation: 4,
    alignSelf: 'center',
    margin: 20,
  },
});
