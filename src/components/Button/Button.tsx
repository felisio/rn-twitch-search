import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

export interface IButton {
  text: String;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };
