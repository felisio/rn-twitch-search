import React from "react";
import { View, Text } from "react-native";
import { styles } from "./__model__.styles";

export interface I__model__ {
  title: string;
}

const __model__: React.FC<I__model__> = ({ title }) => {
  return (
    <View style={styles.view}>
      <Text>__model__ Component</Text>
    </View>
  );
};

export { __model__ };
