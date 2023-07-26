import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
const Lab1 = () => {
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
        <ScrollView keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag'>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>สมุดบันทึก</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder='เพิ่มข้อความที่นี่'
                />
                <Button
                    title='บันทึก'
                    onPress={addText}
                />
                {
                    TextArr.length > 0 && (
                        <View style={styles.textListContainer}>
                            {
                                TextArr.map((text, index) => (
                                    <Text style={styles.textList} key={index}>{text.text}</Text>
                                ))
                            }
                        </View>
                    )
                }
            </SafeAreaView>
        </ScrollView>
    )
}

export default Lab1