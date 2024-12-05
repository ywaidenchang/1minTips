import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TipCard({ tip }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.content}>{tip.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#f9f9f9', padding: 16, marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold' },
  content: { marginTop: 4, fontSize: 14 },
});
