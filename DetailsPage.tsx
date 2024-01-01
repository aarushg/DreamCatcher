// DetailsPage.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useData } from './DataContext';
import { saveData } from './api'; // Import the saveData function

interface Question {
  text: string;
  type: string;
}

const DetailsPage: React.FC<{ route: any }> = ({ route }) => {
  const { itemId, title, questions } = route.params;
  const { data, updateData } = useData();
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>(
    questions.reduce((acc: { [key: string]: string }, q: Question) => {
      acc[q.text] = data[q.text] || '';
      return acc;
    }, {})
  );

  const saveDataToServer = async () => {
    try {
      const responses = questions.map((question: Question) => ({
        text: question.text,
        response: inputValues[question.text] || '', // Use an empty string if no response
      }));

      await saveData(itemId, title, responses); // Call the saveData function
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Failed to save data:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Item ID: {itemId}</Text>
      <Text>Title: {title}</Text>

      {questions.map((question: Question) => (
        <View key={question.text} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          {(question.type === 'text' || question.type === 'fill-in-the-blank' || question.type === 'email') && (
            <TextInput
              style={styles.input}
              placeholder={`Enter your ${question.text}`}
              value={inputValues[question.text]}
              onChangeText={(text) =>
                setInputValues((prev) => ({ ...prev, [question.text]: text }))
              }
              keyboardType={question.type === 'email' ? 'email-address' : 'default'}
            />
          )}
        </View>
      ))}

      <TouchableOpacity onPress={saveDataToServer} style={styles.button}>
        <Text>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    marginVertical: 10,
    width: '80%', // Adjust the width as needed
  },
  questionText: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default DetailsPage;
