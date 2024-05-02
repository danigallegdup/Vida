// { <script src="http://localhost:8097"></script> }

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import App_styles from './App_styles';
import * as FileSystem from 'expo-file-system';


export default function App() {
  const [birthday, setBirthday] = useState('');
  const [weeksLived, setWeeksLived] = useState<number | null>(null);
  const [fileContents, setFileContents] = useState<string | null>(null);

  const calculateWeeksLived = async () => {
    const birthdayDate = new Date(birthday);
    const now = new Date();
    const differenceInMilliseconds = now.getTime() - birthdayDate.getTime();
    const weeks = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7);
    setWeeksLived(weeks);
  
    try {
      const path = FileSystem.documentDirectory + 'Constants.txt';
      await FileSystem.writeAsStringAsync(path, weeks.toString());
      // Read the file
      const contents = await FileSystem.readAsStringAsync(path);
      setFileContents(contents);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={App_styles.container}>
      <Text style={App_styles.title}>Enter Your Birthday</Text>
      {fileContents && <Text style={App_styles.text}>File Contents: {fileContents}</Text>}
      <TextInput
        style={App_styles.input}
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
        <Text style={App_styles.resultText}>You have lived: {weeksLived.toFixed(0)} weeks</Text>
      )}
    </View>
  );
}


