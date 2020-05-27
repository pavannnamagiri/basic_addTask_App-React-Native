import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

function GoalList(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function handleInputEntered(goalText) {
    setEnteredGoal(goalText);
  }

  function addHandler() {
    props.handleGoal(enteredGoal);
    setEnteredGoal("");
    props.modalHandler();
  }

  return (
    <Modal visible={props.modalStatus} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={handleInputEntered}
          value={enteredGoal}
        ></TextInput>
        <Button
          title="ADD"
          style={styles.buttonContainer}
          onPress={addHandler}
        />
        <Button
          title="CANCEL"
          color="red"
          buttonStyle={{ backgroundColor: "#1E6738" }}
          onPress={props.modalHandler}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalList;
