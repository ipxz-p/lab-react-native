import { View, Text, Animated, StyleSheet, Button, Easing } from 'react-native';
import React, { useRef } from 'react';

const Sequence = () => {
    const opacityVal = useRef(new Animated.Value(1)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;
    const spinBackAnim = useRef(new Animated.Value(0)).current;

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const spinBack = spinBackAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "-360deg"],
    });

    const spinForward = Animated.timing(spinAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear, 
        useNativeDriver: true,
    });

    const spinBackward = Animated.timing(spinBackAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
    });

    const fadeOut = Animated.timing(opacityVal, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: true,
    });

    const fadeIn = Animated.timing(opacityVal, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
    });

    const fadeAndSpin = () => {
        Animated.sequence([
            fadeOut,
            fadeIn,
            spinForward,
            spinBackward,
        ]).start(()=>{
            spinAnim.setValue(0)
            spinBackAnim.setValue(0)
        });
    };

    return (
        <View>
            <View style={styles.con}>
                <Animated.Image
                    style={[
                        styles.fadingContainer,
                        { opacity: opacityVal, width: 180, height: 150, transform: [{ rotate: spin }, { rotate: spinBack }] },
                    ]}
                    source={require("../assets/IT_Logo.png")}
                />
            </View>
            <Button title="RUN SEQUENCE" onPress={fadeAndSpin} />
        </View>
    );
};

const styles = StyleSheet.create({
    con: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '92%',
    },
});

export default Sequence;
