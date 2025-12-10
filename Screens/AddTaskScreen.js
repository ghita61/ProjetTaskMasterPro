import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddTaskScreen({ navigation, route }) {
  const { addTask } = route.params;

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [details, setDetails] = useState("");

  function handleSave() {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      shortDesc,
      details,
    };

    addTask(newTask);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une tâche</Text>

      <TextInput
        placeholder="Titre"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description courte"
        style={styles.input}
        value={shortDesc}
        onChangeText={setShortDesc}
      />

      <TextInput
        placeholder="Détails"
        style={[styles.input, { height: 120 }]}
        value={details}
        onChangeText={setDetails}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
  input: { backgroundColor: "#f0f0f0", padding: 10, borderRadius: 8, marginBottom: 12 },
  button: { backgroundColor: "#007AFF", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
