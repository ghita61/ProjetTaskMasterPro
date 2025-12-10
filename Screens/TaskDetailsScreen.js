import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TaskDetailsScreen({ route }) {
  const { taskId, task } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{task?.title}</Text>
        <Text style={styles.id}>ID: {taskId}</Text>
        <Text style={styles.details}>{task?.details || 'Pas de détails.'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  id: { fontSize: 14, color: '#888', marginBottom: 12 },
  details: { fontSize: 16, lineHeight: 22 },
});