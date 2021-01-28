import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9.5}
      />
      <ImageDetail
        title="Beach"
        score={8}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        score={6}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
