import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../App';
import UserProfile from '../Components/UserProfile';
import { TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <UserProfile
        name={user?.name || '---'}
        userId={user?.userId ?? '---'}
        avatarUri={null}
      />

      <View style={styles.infoCard}>
        <Text style={styles.info}>Role: {user?.role}</Text>
        <Text style={styles.info}>Email: {user?.email}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2', alignItems: 'center' },
  infoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  info: { fontSize: 16, marginVertical: 4 },
  logoutButton: { backgroundColor: 'red', padding: 12, borderRadius: 8, width: '100%' },
  logoutText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
});