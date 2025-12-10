import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserProfile({ name = 'Utilisateur', avatarUri, userId }) {
  return (
    <View style={styles.container}>
      <Image
        source={ avatarUri ? { uri: avatarUri } : require('../assets/default.jpg') }
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>ID : {userId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 8 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginRight: 12, backgroundColor: '#eee' },
  info: {},
  name: { fontSize: 18, fontWeight: '600' },
  meta: { marginTop: 4, color: '#666' },
});