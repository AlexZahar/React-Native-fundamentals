import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ScreenCalculator = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ScreenCalculator;
