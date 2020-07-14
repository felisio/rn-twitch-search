import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./Loading.styles";
import { Colors } from "styles";

const Loading: React.FC = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color={Colors.TWITCH} />
    </View>
  );
};

export { Loading };
