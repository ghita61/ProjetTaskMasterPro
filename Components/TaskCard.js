import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskCard({ task, onPressDetails }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      {task.shortDesc ? <Text style={styles.shortDesc}>{task.shortDesc}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={() => onPressDetails(task)}>
        <Text style={styles.buttonText}>Voir détails</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  shortDesc: { fontSize: 14, color: '#666', marginBottom: 12 },
  button: { backgroundColor: '#007AFF', padding: 8, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});