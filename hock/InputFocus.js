import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputFocus = () => {
  const inputRef = useRef(null);

  const focarInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Digite algo"
        placeholderTextColor="#888"
      />
      <Button title="Focar Input" onPress={focarInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 3,
    borderColor: '#FF00FF',
    backgroundColor: '#1A0033',
    color: '#FF99FF',
    width: 220,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 18,
    shadowColor: '#FF00FF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default InputFocus;
