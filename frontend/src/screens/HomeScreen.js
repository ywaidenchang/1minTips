import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import TipCard from '../components/TipCard';
import { getTips } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    const data = await getTips();
    setTips(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>로딩 중...</Text>
      ) : (
        <FlatList
          data={tips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TipCard tip={item} />}
        />
      )}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={styles.buttonText}>팁 업로드</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  uploadButton: { backgroundColor: '#007bff', padding: 10, marginTop: 16, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
