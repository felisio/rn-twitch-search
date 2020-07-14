import React from "react";
import { View, Text } from "react-native";
import { styles } from "./InputSearch.styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export interface IInputSearch {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onSubmitValue: (value: string) => void;
  onClear: () => void;
}

const InputSearch: React.FC<IInputSearch> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitValue,
  onClear,
}) => {
  const renderClearButton = () => {
    return (
      <TouchableOpacity style={styles.clearView} onPress={onClear}>
        <Text style={styles.clearText}>Cancel</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.view}>
        <TextInput
          testID="TextInput"
          defaultValue={value}
          onChangeText={onChangeText}
          style={styles.input}
          onSubmitEditing={() => onSubmitValue(value)}
          returnKeyType="search"
          placeholder={placeholder}
        />
        {renderClearButton()}
      </View>
    </View>
  );
};

export { InputSearch };
