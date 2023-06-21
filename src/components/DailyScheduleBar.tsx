import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function DailyScheduleBar() {
  return (
    <View style={styles.dailySchedule}>
      <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
        Daily Sleep Schedule
      </Text>
      <TouchableOpacity>
        <LinearGradient
          colors={['#92A3FD', '#9DCEFF']}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 50,
          }}>
          <Text style={{color: '#fff'}}>Check</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dailySchedule: {
    width: 315,
    height: 57,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EAEFFF',
  },
});
