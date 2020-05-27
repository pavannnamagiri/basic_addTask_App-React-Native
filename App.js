import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleGoal = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleCancel = () => {
    setModalIsOpen(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Click to Add" onPress={handleModalOpen} />
      <GoalInput
        handleGoal={handleGoal}
        modalStatus={modalIsOpen}
        modalHandler={handleCancel}
      ></GoalInput>
      <FlatList
        keyExtractor={(item, key) => item.key}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            index={itemData.item.key}
            data={itemData.item.value}
            onDelete={removeGoalHandler}
          ></GoalItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
