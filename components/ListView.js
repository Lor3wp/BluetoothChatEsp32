import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const btData = [
  { key: "Devin", lastName: "DevinLast" },
  { key: "Dan", lastName: "DanLast" },
  { key: "Dominic", lastName: "DominicLast" },
  { key: "Jackson", lastName: "JacksonLast" },
  { key: "James", lastName: "JamesLst" },
  { key: "Joel", lastName: "JoelLast" },
  { key: "John", lastName: "JognLast" },
  { key: "Jillian", lastName: "JillianLast" },
  { key: "Jimmy", lastName: "JimmyLast" },
  { key: "Julie", lastName: "JulieLast" },
];
const ListView = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={btData}
        renderItem={({ item }) => <ListItem text={item} />}
      />
    </View>
  );
};

export default ListView;
