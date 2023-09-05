import { View, Text, Animated, Button, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

const Spring = () => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    const spring = () => {
        Animated.spring(springVal, {
            toValue: 1,
            friction: 1,
            useNativeDriver: true
        }).start(()=>{ springVal.setValue(0.3) })
        
    }
    return (
        <View style>
            <View style={styles.con}>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{scale: springVal}]}}
                    source={require("../assets/IT_Logo.png")}
                />
            </View>
            <Button  title="Spring" onPress={spring}  />
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '92%'
    },

})
export default Spring