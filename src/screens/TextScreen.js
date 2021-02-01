import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>ENTER PASSWORD </Text>
      <TextInput
        style={style.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {/* <Text>Hi, my name is: {name}</Text> */}
      {name.length < 5 ? (
        <Text>Your password is less than 5 chars</Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
