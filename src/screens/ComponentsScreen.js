import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Alexandru Zahar";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.textStyleSubline}> My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
  },
  textStyleSubline: {
    fontSize: 20,
    color: "green",
  },
});

export default ComponentsScreen;
