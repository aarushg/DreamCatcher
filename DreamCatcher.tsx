// DreamCatcher.tsx

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

interface QuestionType {
  type: string; 
  text: string;
}

interface ListItem {
  id: string;
  title: string;
  questions: any[];
}

interface DetailsPageParams {
  itemId: string;
  title: string;
  questions: QuestionType[];
}

const generateNumberedOptions = (count: number): string[] => {
  return Array.from({ length: count }, (_, index) => `${index + 1}`);
};


const data: ListItem[] = [
  {
    id: '1',
    title: 'ID',
    questions: [
      { type: 'fill-in-the-blank', text: 'What is your first name?' },
      { type: 'fill-in-the-blank', text: 'What is your last name?' },
      { type: '' , text: '-----------------------------------------' },
      { type: 'fill-in-the-blank', text: 'Address:'},
  
    ],
  },
  {
    id: '2',
    title: 'Passport',
    questions: [
      { type: 'fill-in-the-blank', text: 'DOB Day?'},
      { type: 'fill-in-the-blank', text: 'DOB Month?'},
      { type: 'fill-in-the-blank', text: 'DOB Year?'},
      { type: 'fill-in-the-blank', text: 'What country?' }


    ],
  },
  {
    id: '3',
    title: 'Reference',
    questions: [
      { type: 'fill-in-the-blank', text: 'What is your first name of first Reference?' },
      { type: 'fill-in-the-blank', text: 'What is your last name of first Reference?' },
      { type: 'email', text: 'What is the email of first Reference?' },

      { type: 'fill-in-the-blank', text: 'What is your first name of second Reference?' },
      { type: 'fill-in-the-blank', text: 'What is your last name of second Reference?' },
      { type: 'email', text: 'What is the email of second Reference?' }


    ],
  },
  {
    id: '4',
    title: 'Education',
    questions: [
      { type: 'fill-in-the-blank', text: 'What is the name of your Highschool?' },
      { type: 'fill-in-the-blank', text: 'Highschool Start?' },
      { type: 'fill-in-the-blank', text: 'Highschool End?' },
      { type: 'fill-in-the-blank', text: 'Highschool City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Highschool Country?' },

      { type: 'fill-in-the-blank', text: 'What is the name of your Certschool?' },
      { type: 'fill-in-the-blank', text: 'Cert Start?' },
      { type: 'fill-in-the-blank', text: 'Cert End?' },
      { type: 'fill-in-the-blank', text: 'Cert City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Cert Country?' },

      { type: 'fill-in-the-blank', text: 'What is the name of your UnderGrad College?' },
      { type: 'fill-in-the-blank', text: 'UnderGrad Start?' },
      { type: 'fill-in-the-blank', text: 'UnderGrad End?' },
      { type: 'fill-in-the-blank', text: 'UnderGrad City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'UnderGrad Country?' },

      { type: 'fill-in-the-blank', text: 'What is the name of your Masters College?' },
      { type: 'fill-in-the-blank', text: 'Masters Start?' },
      { type: 'fill-in-the-blank', text: 'Masters End?' },
      { type: 'fill-in-the-blank', text: 'Masters City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Masters Country?' },

      { type: 'fill-in-the-blank', text: 'What is the name of your PHD College?' },
      { type: 'fill-in-the-blank', text: 'PHD Start?' },
      { type: 'fill-in-the-blank', text: 'PHD End?' },
      { type: 'fill-in-the-blank', text: 'PHD City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'PHD Country?' }
    ],
  },
  {
    id: '5',
    title: 'Experiance',
    questions: [
      { type: 'fill-in-the-blank', text: 'Y1?' },
      { type: 'fill-in-the-blank', text: 'Y1 Start?' },
      { type: 'fill-in-the-blank', text: 'Y1 End?' },
      { type: 'fill-in-the-blank', text: 'Y1 City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Y1 Country?' },

      { type: 'fill-in-the-blank', text: 'Y2' },
      { type: 'fill-in-the-blank', text: 'Y2 Start?' },
      { type: 'fill-in-the-blank', text: 'Y2 End?' },
      { type: 'fill-in-the-blank', text: 'Y2 City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Y2 Country?' },

      { type: 'fill-in-the-blank', text: 'Y3?' },
      { type: 'fill-in-the-blank', text: 'Y3 Start?' },
      { type: 'fill-in-the-blank', text: 'Y3 End?' },
      { type: 'fill-in-the-blank', text: 'Y3 City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Y3 Country?' },

      { type: 'fill-in-the-blank', text: 'Y4?' },
      { type: 'fill-in-the-blank', text: 'Y4 Start?' },
      { type: 'fill-in-the-blank', text: 'Y4 End?' },
      { type: 'fill-in-the-blank', text: 'Y4 City, Prov/State:?' },
      { type: 'fill-in-the-blank', text: 'Y4 Country?' }
    ],
  },
  {
    id: '6',
    title: 'Advertising',
    questions: [
      { type: 'fill-in-the-blank', text: 'Agency 1?'},
      { type: 'fill-in-the-blank', text: 'Agency 2?'},
      { type: 'fill-in-the-blank', text: 'Agency 3?'},
      { type: 'fill-in-the-blank', text: 'Agency 4?'}
    ],
  },
  {
    id: '7',
    title: 'English Test',
    questions: [
      { type: 'fill-in-the-blank', text: 'What is your favorite cats color?'},
      { type: 'upload-image', text: 'Upload a picture of your fats favorite place' },
    ],
  },
  {
    id: '8',
    title: 'Background Check',
    questions: [
      { type: 'multiple-choice', text: 'What is your favorite cats color?', options: ['Red', 'Blue', 'Green'] },
      { type: 'upload-image', text: 'Upload a picture of your fats favorite place' },
    ],
  },
  {
    id: '9',
    title: 'Health Test',
    questions: [
      { type: 'multiple-choice', text: 'What is your favorite gggg color?', options: ['Red', 'Blue', 'Green'] },
      { type: 'upload-image', text: 'Upload a picture of your ssssfavorite place' },
    ],
  },
];

const DreamCatcher: React.FC = () => {
  const navigation = useNavigation();


  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() =>
        navigation.navigate('DetailsPage', {
          itemId: item.id,
          title: item.title,
          questions: item.questions,
        } as DetailsPageParams)
      }
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DreamCatcher;