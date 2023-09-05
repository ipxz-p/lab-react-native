import { View, Text, Animated, Button, StyleSheet, Easing } from 'react-native'
import React, { useRef } from 'react'

const Parallel = () => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const start = () => {
        Animated.parallel([
            Animated.spring(springVal, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
            }).start(()=>{ springVal.setValue(0.3) }),
            Animated.timing(translateX, {
                toValue: -30,
                duration: 500,
                useNativeDriver: true
            }).start(()=>{ 
                Animated.timing(translateX, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true
                }).start(()=>{
                    Animated.timing(translateX, {
                        toValue: 0,
                        duration: 1500,
                        easing: Easing.bounce,
                        useNativeDriver: true
                    }).start()
                })
            })
        ])
        
        
    }
    return (
        <View style>
            <View style={styles.con}>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{scale: springVal}]}}
                    source={require("../assets/IT_Logo.png")}
                />
                <Animated.Text style={[styles.text, {transform: [{translateX}, {translateY}]}]}>
                    Welcome to Faculty of IT!!
                </Animated.Text>
            </View>
            <Button  title="RUN PARALLEL" onPress={start}  />
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '92%'
    },
    text:{
        color: 'gold',
        fontWeight: '600',
        fontSize: 20
    }

})
export default Parallel