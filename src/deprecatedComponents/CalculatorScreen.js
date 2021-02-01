import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_increment":
      return { ...state, counter: state.counter + 1 };
    // break;
    case "change_decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
const VALUE_INCREMENT = 1;
const ScreenCalculator = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "change_increment", payload: VALUE_INCREMENT });
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "change_decrement", payload: -1 * VALUE_INCREMENT });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ScreenCalculator;
