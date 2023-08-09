import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartGameScreen = (props) => {
  const [randomNum, setRandomNum] = useState(0);
  useEffect(() => {
    if(randomNum > 0){
      props.onStartGame(randomNum);
      console.log(randomNum);
    }
  }, [randomNum]);
  const randomNumber = () => {
    const newRandomNum = Math.floor(Math.random() * 100);
    setRandomNum(newRandomNum);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          randomNumber()
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
