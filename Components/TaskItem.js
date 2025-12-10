import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function TaskItem({ title, completed = false, onToggle }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, completed && styles.completed]}>{title}</Text>
      <Switch value={completed} onValueChange={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 6,
    elevation: 1,
  },
  title: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: '#999' },
});