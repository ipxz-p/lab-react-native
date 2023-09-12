import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Animated, PanResponder } from "react-native";

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        listener: (
          event,
          gestureState
        ) => {
          const touches = event.nativeEvent.touches;
          if (touches.length >= 2) {
            Animated.spring(scale, {
              toValue: 3,
              friction: 3,
              useNativeDriver: false,
            }).start();
          }
        },
        useNativeDriver: false
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
      pan.flattenOffset();
    },
  })
  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.image, { transform: [{ scale: scale }] }]}
        source={require('./assets/IT_Logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});
