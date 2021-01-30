import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreens</Text>
      <Button
        title="Navigate to components screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Calculator"
        onPress={() => navigation.navigate("Calculator")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 59,
    paddingTop: 42,
  },
});

export default HomeScreen;
