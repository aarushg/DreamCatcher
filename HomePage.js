// HomePage.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IDPage from './IDPage';
import ProgressBar from './components/ProgressBar.js';

export default function HomePage() {
  const navigation = useNavigation();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [monthBorn, setMonthBorn] = useState('');
  const [dayBorn, setDayBorn] = useState('');
  const [yearBorn, setYearBorn] = useState('');
  
  const [firstRefFirstName, setFirstRefFirstName] = useState('');
  const [firstRefLastName, setFirstRefLastName] = useState('');
  const [firstRefEmail, setFirstRefEmail] = useState('');
  
  const [secondRefFirstName, setSecondRefFirstName] = useState('');
  const [secondRefLastName, setSecondRefLastName] = useState('');
  const [secondRefEmail, setSecondRefEmail] = useState('');
  
  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setMonthBorn("");
    setDayBorn("");
    setYearBorn("");
    setFirstRefFirstName("");
    setFirstRefLastName("");
    setFirstRefEmail("");
    setSecondRefFirstName("");
    setSecondRefLastName("");
    setSecondRefEmail("");
    setDisplay(false);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome, you are logged in!</Text>

        <Text>Enter your First Name:</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter First Name' 
          onChangeText={(text) => { setFirstName(text) }} 
          value={firstName} 
        />
              
        <Text>Enter your Last Name:</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Last Name' 
          onChangeText={(text) => { setLastName(text) }} 
          value={lastName} 
        />

        <Text>Enter Month Born:</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Month Born' 
          onChangeText={(text) => { setMonthBorn(text) }} 
          value={monthBorn} 
        />
      
        <Text>Enter your Day Born:</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Day Born' 
          onChangeText={(text) => { setDayBorn(text) }} 
          value={dayBorn} 
        />

        <Text>Enter Year Born:</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Year Born' 
          onChangeText={(text) => { setYearBorn(text) }} 
          value={yearBorn} 
        />

        <Text>What is your first name of first Reference?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter First Name of First Reference' 
          onChangeText={(text) => { setFirstRefFirstName(text) }} 
          value={firstRefFirstName} 
        />

        <Text>What is your last name of first Reference?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Last Name of First Reference' 
          onChangeText={(text) => { setFirstRefLastName(text) }} 
          value={firstRefLastName} 
        />

        <Text>What is the email of first Reference?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Email of First Reference' 
          onChangeText={(text) => { setFirstRefEmail(text) }} 
          value={firstRefEmail} 
        />

        <Text>What is your first name of second Reference?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter First Name of Second Reference' 
          onChangeText={(text) => { setSecondRefFirstName(text) }} 
          value={secondRefFirstName} 
        />

        <Text>What is your last name of second Reference?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Last Name of Second Reference' 
          onChangeText={(text) => { setSecondRefLastName(text) }} 
          value={secondRefLastName} 
        />

        <Text>What is the name of your Highschool?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Highschool Name' 
          onChangeText={(text) => { setHighSchoolName(text) }} 
          value={highSchoolName} 
        />

        <Text>Highschool Start?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Highschool Start Year' 
          onChangeText={(text) => { setHighSchoolStart(text) }} 
          value={highSchoolStart} 
        />

        <Text>Highschool End?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Highschool End Year' 
          onChangeText={(text) => { setHighSchoolEnd(text) }} 
          value={highSchoolEnd} 
        />

        <Text>Highschool City, Prov/State:?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Highschool City and State' 
          onChangeText={(text) => { setHighSchoolCityState(text) }} 
          value={highSchoolCityState} 
        />

        <Text>Highschool Country?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Highschool Country' 
          onChangeText={(text) => { setHighSchoolCountry(text) }} 
          value={highSchoolCountry} 
        />

        <Text>What is the name of your Certschool?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Certschool Name' 
          onChangeText={(text) => { setCertSchoolName(text) }} 
          value={certSchoolName} 
        />

        <Text>Cert Start?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Certschool Start Year' 
          onChangeText={(text) => { setCertSchoolStart(text) }} 
          value={certSchoolStart} 
        />

        <Text>Cert End?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Certschool End Year' 
          onChangeText={(text) => { setCertSchoolEnd(text) }} 
          value={certSchoolEnd} 
        />

        <Text>Cert City, Prov/State:?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Certschool City and State' 
          onChangeText={(text) => { setCertSchoolCityState(text) }} 
          value={certSchoolCityState} 
        />

        <Text>Cert Country?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Certschool Country' 
          onChangeText={(text) => { setCertSchoolCountry(text) }} 
          value={certSchoolCountry} 
        />

        <Text>What is the name of your UnderGrad College?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter UnderGrad College Name' 
          onChangeText={(text) => { setUnderGradCollegeName(text) }} 
          value={underGradCollegeName} 
        />

        <Text>UnderGrad Start?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter UnderGrad Start Year' 
          onChangeText={(text) => { setUnderGradStart(text) }} 
          value={underGradStart} 
        />

        <Text>UnderGrad End?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter UnderGrad End Year' 
          onChangeText={(text) => { setUnderGradEnd(text) }} 
          value={underGradEnd} 
        />

        <Text>UnderGrad City, Prov/State:?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter UnderGrad City and State' 
          onChangeText={(text) => { setUnderGradCityState(text) }} 
          value={underGradCityState} 
        />

        <Text>UnderGrad Country?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter UnderGrad Country' 
          onChangeText={(text) => { setUnderGradCountry(text) }} 
          value={underGradCountry} 
        />

        <Text>What is the name of your Masters College?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Masters College Name' 
          onChangeText={(text) => { setMastersCollegeName(text) }} 
          value={mastersCollegeName} 
        />

        <Text>Masters Start?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Masters Start Year' 
          onChangeText={(text) => { setMastersStart(text) }} 
          value={mastersStart} 
        />

        <Text>Masters End?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Masters End Year' 
          onChangeText={(text) => { setMastersEnd(text) }} 
          value={mastersEnd} 
        />

        <Text>Masters City, Prov/State:?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Masters City and State' 
          onChangeText={(text) => { setMastersCityState(text) }} 
          value={mastersCityState} 
        />

        <Text>Masters Country?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter Masters Country' 
          onChangeText={(text) => { setMastersCountry(text) }} 
          value={mastersCountry} 
        />

        <Text>What is the name of your PHD College?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter PHD College Name' 
          onChangeText={(text) => { setPhdCollegeName(text) }} 
          value={phdCollegeName} 
        />

        <Text>PHD Start?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter PHD Start Year' 
          onChangeText={(text) => { setPhdStart(text) }} 
          value={phdStart} 
        />

        <Text>PHD End?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter PHD End Year' 
          onChangeText={(text) => { setPhdEnd(text) }} 
          value={phdEnd} 
        />

        <Text>PHD City, Prov/State:?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter PHD City and State' 
          onChangeText={(text) => { setPhdCityState(text) }} 
          value={phdCityState} 
        />

        <Text>PHD Country?</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter PHD Country' 
          onChangeText={(text) => { setPhdCountry(text) }} 
          value={phdCountry} 
        />

        <View style={{ marginBottom: 10 }} >
          <Button 
            title='Get Details' 
            color="green" 
            onPress={() => {setDisplay(true)}}
          />
        </View>
        <Button 
          title='Clear Details' 
          onPress={resetForm}
        />
        {display && 
          <View>
            <Text style={{fontSize: 20}}>First Name: {firstName}</Text>
            <Text style={{fontSize: 20}}>Last Name: {lastName}</Text>
            <Text style={{fontSize:20}}>Month Born: {monthBorn}</Text>
            <Text style={{fontSize:20}}>Day Born: {dayBorn}</Text>
            <Text style={{fontSize:20}}>Year Born: {yearBorn}</Text>
            <Text style={{fontSize:20}}>First Reference First Name: {firstRefFirstName}</Text>
            <Text style={{fontSize:20}}>First Reference Last Name: {firstRefLastName}</Text>
            <Text style={{fontSize:20}}>First Reference Email: {firstRefEmail}</Text>
            <Text style={{fontSize:20}}>Second Reference First Name: {secondRefFirstName}</Text>
            <Text style={{fontSize:20}}>Second Reference Last Name: {secondRefLastName}</Text>
            <Text style={{fontSize:20}}>Second Reference Email: {secondRefEmail}</Text>




          </View>
        }
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    </ScrollView>
  );
}

const styles = {
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
};
