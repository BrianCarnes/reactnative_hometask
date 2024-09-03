// components/TextField.tsx
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TextFieldProps extends TextInputProps {
  isPassword?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ isPassword = false, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <MaterialCommunityIcons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
});

export default TextField;
