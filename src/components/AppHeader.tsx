import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function AppHeader() {
  return (
    <View style={styles.headingContainer}>
      <TouchableOpacity style={styles.iconStyle}>
        <Icon name="chevron-left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headingText}>Sleep Tracker</Text>
      <TouchableOpacity style={styles.iconStyle}>
        <EntypoIcon name="dots-two-horizontal" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10%',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    backgroundColor: '#F7F8F8',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  headingText: {fontSize: 16, fontWeight: '700', color: '#000'},
});
