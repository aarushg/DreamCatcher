import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, SafeAreaView, Platform, Text, View } from 'react-native';
import React from "react";



console.log(StatusBar.currentHeight);

export default function App() {
  return (
      <> 
      
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <View style={{ padding:16, backgroundColor: "green"}}>
            <Text>Search</Text>
          </View>
          <View style={{ flex: 1, padding: 16, backgroundColor: "blue"}}>
            <Text>List</Text>
          </View>
        </SafeAreaView>
        <ExpoStatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({});
