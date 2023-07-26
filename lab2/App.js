import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Lab1 from './data/Lab1';
import Lab2 from './data/Lab2';
export default function App() {
  const [text, setText] = useState('')
  const [TextArr, setTextArr] = useState([])
  const addText = () => {
    setTextArr((prev) => [...prev, { text: text, index: TextArr.length }])
    setText('')
  }
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    header: {
      textAlign: 'center',
      fontSize: 24
    },
    input: {
      marginTop: 12,
      marginBottom: 12,
      borderWidth: 1,
      padding: 10
    },
    textListContainer: {
      marginTop: 25
    },
    textList: {
      fontSize: 28,
      textAlign: 'center'
    }
  });
  return (
    <Lab2 />
  );
}

