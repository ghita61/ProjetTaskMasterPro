import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './Screens/LoginScreen';
import TasksScreen from './Screens/TasksScreen';
import TaskDetailsScreen from './Screens/TaskDetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AddTaskScreen from "./Screens/AddTaskScreen";

export const AuthContext = createContext();

const AuthStack = createNativeStackNavigator();
const TasksStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TasksStackNavigator() {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen name="TasksList" component={TasksScreen} options={{ title: "Tâches" }} />
      <TasksStack.Screen name="TaskDetails" component={TaskDetailsScreen} options={{ title: "Détails" }} />
      <TasksStack.Screen name="AddTask" component={AddTaskScreen} options={{ title: "Nouvelle tâche" }} />
    </TasksStack.Navigator>
  );
}
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tasks') iconName = 'list';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tasks" component={TasksStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;

          if (route.name === "Tasks") iconName = "list";
          else if (route.name === "Profile") iconName = "person";

          return <Ionicons name={iconName} size={22} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tasks" component={TasksStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
 const [user, setUser] = useState(null);

 const authContextValue = {
   user,
   signIn: (userObj) => setUser(userObj),
   signOut: () => setUser(null)
 };

  return (
    <AuthContext.Provider value={authContextValue}>
        <NavigationContainer>
            {user == null ? (
                <AuthStack.Navigator>
                    <AuthStack.Screen name="Login" component={LoginScreen} />
                </AuthStack.Navigator>
            ) : (
                <MainTabNavigator />
            )}
        </NavigationContainer>
    </AuthContext.Provider>
  );
}
