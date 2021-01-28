import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Text>COLOR SCREEN</Text>
      <Button
        title="New Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
          console.log(setColors);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: "100%",
                backgroundColor: item,
                borderRadius: 45,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})})`;
};
const style = StyleSheet.create({});
export default ColorScreen;
