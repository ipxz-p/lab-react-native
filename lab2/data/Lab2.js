import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, StatusBar, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const Lab2 = () => {
    const course = [
        { id: 1, name: 'Infomation Technology', img: require('../assets/img/course-bach-it.jpg') },
        { id: 2, name: 'Data Science and Business Analytics', img: require('../assets/img/course-bach-dsba.jpg') },
        { id: 3, name: 'Business Infomation Technology', name2: '(International Program)', img: require('../assets/img/course-bach-bit.jpg') },
        { id: 4, name: 'Artificial intelligence Technology', img: require('../assets/img/course-bach-ait.jpg') },
    ]
    const styles = StyleSheet.create({
        container: {
            marginTop: StatusBar.currentHeight,
            flex: 1,
        },
        nav: {
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'auto',
            backgroundColor: 'aqua'
        },
        textNav: {
            fontSize: 32,
            fontWeight: '600',
            color: 'blue',
            marginRight: 50
        },
        imgContainer: {
            flexDirection: 'row',
            width: 60
        },
        image: {
            resizeMode: 'contain',
            flex: 1,
            aspectRatio: 1 // Your aspect ratio
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 20,
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={require('../assets/img/IT_Logo.png')} />
                </View>
                <Text style={styles.textNav}>Programs</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={course}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Image source={item.img} />
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{fontWeight: '700', fontSize: 18}}>{item.name}</Text>
                                    {item?.name2 && (
                                        <Text style={{fontWeight: '700', fontSize: 18}}>{item.name2}</Text>
                                    )}
                                </TouchableOpacity>
                            </View>)
                    }}
                />
                {/* More components can go here */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Lab2;