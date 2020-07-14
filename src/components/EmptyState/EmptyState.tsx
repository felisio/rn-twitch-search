import React from "react";
import { View, Text } from "react-native";
import { styles } from "./EmptyState.styles";

type EmptyType = "empty" | "error" | "initial";
export interface IEmptyState {
  text?: String;
  type?: EmptyType;
}

const EmptyState: React.FC<IEmptyState> = ({
  text = "Streams not found",
  type = "empty",
}) => {
  const getEmoji = () => {
    switch (type) {
      case "empty":
        return `🤷`;
      case "error":
        return `😢`;
      case "initial":
        return `🕵️‍♂️`;
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {getEmoji()}
        {"\n"}
        {text}
      </Text>
    </View>
  );
};

export { EmptyState };
