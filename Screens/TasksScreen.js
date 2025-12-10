import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { TASKS } from '../Data/Tasks';
import TaskCard from '../Components/TaskCard';
import TaskItem from '../Components/TaskItem';
import { Ionicons } from "@expo/vector-icons";

export default function TasksScreen({ navigation }) {
  const [tasks, setTasks] = useState(TASKS);
  const [completedMap, setCompletedMap] = useState({});

  function toggleCompleted(id) {
    setCompletedMap(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function addTask(newTask) {
    setTasks(prev => [newTask, ...prev]);
  }

  function onPressDetails(task) {
    navigation.navigate('TaskDetails', { taskId: task.id, task });
  }

  return (
    <View style={styles.container}>
      {/* FAB at top-right */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask', { addTask })}
        style={styles.fabTop}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <TaskCard task={item} onPressDetails={onPressDetails} />
            <TaskItem
              title={`Marquer "${item.title}"`}
              completed={!!completedMap[item.id]}
              onToggle={() => toggleCompleted(item.id)}
            />
          </>
        )}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  fabTop: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 5,
  },
});