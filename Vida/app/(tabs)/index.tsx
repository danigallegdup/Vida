/*
 
npx expo start
npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --https 

want --> want a modal 
want --> want a calendar


*/
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function TabOneScreen() {


  // The total number of boxes to be colored blue
  const totalBlueBoxes =  1181;

  // Helper function to determine the color of the box
  const getBoxColor = (boxIndex: number): string => {
    return boxIndex < totalBlueBoxes ? 'gold'  :'grey' ;
  };

  // Create a single row of 52 boxes with the correct color
  const renderBoxRow = (rowIndex: number): JSX.Element => (
    <View key={`row-${rowIndex}`} style={styles.boxContainer}>
      {Array.from({ length: 52 }).map((_, index) => {
        // Calculate the overall index of the box
        const boxIndex = rowIndex * 52 + index;
        return (
          <View key={index} style={[styles.box, { backgroundColor: getBoxColor(boxIndex) }]} />
        );
      })}
    </View>
  );

// Render rows with a side number line every 5 rows
const renderRowsWithSideNumber = () => {
  const elements: JSX.Element[] = [];
  // Calculate the height of a single row including the bottom margin
  const singleRowHeight = styles.box.height + (styles.box.margin * 2.0);
  // Start loop at 5 since we want to start numbering from the 5th row
  for (let i = 0; i <= 99; i += 5) {
    // Calculate the top style based on the height of each row
    // Subtract half the height of the text to center it vertically within the row
    const topStyle = (i+1) * singleRowHeight - (singleRowHeight / 2);
    elements.push(
      <Text key={`num-${i}`} style={[styles.sideNumber, { top: topStyle }]}>
        {i}
      </Text>
    );
  }

  return elements;
};


  return (
    <View style={styles.outerContainer}>
      {renderRowsWithSideNumber()}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Titles are commented out, uncomment if needed */}
        {/* <Text style={styles.title}>This will be epic and done before I Know it!</Text>
        <Text style={styles.title}>I am going to make Vida</Text>
        <Text style={styles.title}>It will work</Text> */}
        {Array.from({ length: 100 }, (_, index) => renderBoxRow(index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
  },
  container: {
    justifyContent: 'flex-start', // Align content to the top
  },
  boxContainer: {
    left: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 3.5,
    height: 3.5,
    margin: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sideNumber: {
    position: 'absolute',
    left: 0,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    width: 25, // Width to accommodate the numbers
  },
});
