import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Vlad", id: "1", age: 22 },
    { name: "Edi", id: "2", age: 35 },
    { name: "Miruna", id: "3", age: 61 },
    { name: "Stefan", id: "4", age: 33 },
    { name: "Andrei", id: "5", age: 41 },
    { name: "George", id: "6", age: 18 },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.id}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
