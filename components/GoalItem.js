import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

function GoalItem(props) {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.index)}>
      <View style={styles.goalContainer}>
        <Text>{props.data}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  goalContainer: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },

  inputContainer: { flexDirection: "row", justifyContent: "space-between" },
});

export default GoalItem;
