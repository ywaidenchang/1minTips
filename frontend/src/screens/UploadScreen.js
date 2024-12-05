import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { uploadTip } from '../services/api';

export default function UploadScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = async () => {
    if (title && content) {
      await uploadTip(title, content);
      alert('팁이 업로드되었습니다!');
      navigation.goBack();
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="팁 제목"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="팁 내용"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="업로드" onPress={handleUpload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginBottom: 16 },
  textArea: { height: 100 },
});
