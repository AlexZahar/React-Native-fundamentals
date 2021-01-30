import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { set } from "react-native-reanimated";

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //  color === 'red', 'green','blue'
    //change === +15, -15
    // Logic using the classic approach
    // if (color === "red") {
    //   if (red + change > 255 || red + change < 0) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }
    // if (color === "green") {
    //   if (green + change > 255 || green + change < 0) {
    //     return;
    //   } else {
    //     setGreen(green + change);
    //   }
    // }
    // if (color === "blue") {
    //   if (blue + change > 255 || blue + change < 0) {
    //     return;
    //   } else {
    //     setBlue(blue + change);
    //   }
    // }
    // Using a switcher with if statement
    // switch (color) {
    //   case "red":
    //     if (red + change > 255 || red + change < 0) {
    //       return;
    //     } else {
    //       setRed(red + change);
    //     }
    //     break;
    //   case "green":
    //     if (green + change > 255 || green + change < 0) {
    //       return;
    //     } else {
    //       setGreen(green + change);
    //     }
    //     break;
    //   case "blue":
    //     if (blue + change > 255 || blue + change < 0) {
    //       return;
    //     } else {
    //       setBlue(blue + change);
    //     }
    //     break;
    // }
    // Using ternary exp in a switcher
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
    }
  };
  console.log("red:", red);
  console.log("green:", green);
  console.log("blue:", blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          width: 200,
          height: 200,
          marginTop: 60,
          alignSelf: "center",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
