/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppHeader from './src/components/AppHeader';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {chartConfig} from './src/utility/config';
import ScheduleList from './src/components/ScheduleList';
import DailyScheduleBar from './src/components/DailyScheduleBar';

interface propType {
  icon: any;
  title: string;
  time: string;
  remainingTime: string;
}

const screenWidth = Dimensions.get('window').width;
const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [2, 5, 3, 6, 5, 4, 8],
      color: (opacity = 1) => `#93A8FE`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const scheduleData: propType[] = [
  {
    icon: require('./src/assets/bed-icon.png'),
    title: 'Bedtime',
    time: '09:00pm',
    remainingTime: 'in 6hours 22minutes',
  },
  {
    icon: require('./src/assets/clock-icon.png'),
    title: 'Alarm',
    time: '05:10am',
    remainingTime: 'in 14hours 30minutes',
  },
];

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <AppHeader />

          <View style={{marginTop: '10%'}}>
            <LineChart
              data={data}
              width={screenWidth}
              height={200}
              chartConfig={chartConfig}
              withHorizontalLines={false}
              withVerticalLines={false}
              bezier
              withDots={false}
            />
          </View>

          <LinearGradient
            colors={['#92A3FD', '#9DCEFF']}
            style={styles.linearGradient}>
            <View style={{margin: 20}}>
              <Text style={styles.lastSleepText}>Last Night Sleep</Text>
              <Text style={[styles.lastSleepText, {fontWeight: '400'}]}>
                8h 20m
              </Text>
            </View>
            <Image
              source={require('./src/assets/sleep-graph.png')}
              style={{position: 'absolute', bottom: 0}}
            />
          </LinearGradient>

          <DailyScheduleBar />
          <Text style={styles.todaySchedule}>Today Schedule</Text>
          <ScheduleList scheduleData={scheduleData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: 315,
    height: 148,
    borderRadius: 22,
    alignSelf: 'center',
    marginTop: '10%',
  },
  lastSleepText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    lineHeight: 21,
    marginVertical: 2,
  },
  todaySchedule: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: '8%',
    marginTop: '8%',
  },
});

export default App;
