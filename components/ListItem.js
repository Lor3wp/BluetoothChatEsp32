import react from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  container: {
    borderWidth: 1,
  },
});

const ListItem = (props) => {
  return (
    <TouchableHighlight onPress={() => console.log(props.text.key)}>
      <View style={styles.container}>
        <Text style={styles.item}>{props.text.key}</Text>
        <Text style={styles.item}>{props.text.lastName}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
