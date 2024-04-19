// 

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


export default function TabTwoScreen() {
  const [birthday, setBirthday] = useState('');
  const [weeksLived, setWeeksLived] = useState<number | null>(null);

  
  const calculateWeeksLived = () => {
    // Convert the birthday string to a date object
    const birthdayDate = new Date(birthday);
    const now = new Date();
    const differenceInMilliseconds = now.getTime() - birthdayDate.getTime();
    const weeks = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7);
    setWeeksLived(weeks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Birthday</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBirthday}
        value={birthday}
        placeholder="YYYY-MM-DD"
        keyboardType="default"
      />
      <Button
        title="Calculate Weeks Lived"
        onPress={calculateWeeksLived}
      />
      {weeksLived !== null && (
        <Text style={styles.resultText}>You have lived: {weeksLived.toFixed(0)} weeks</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  resultText: {
    fontSize: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

