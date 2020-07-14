import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "styles";

interface LoadingStyles {
  view: ViewStyle;
}

export const styles = StyleSheet.create<LoadingStyles>({
  view: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BCK_BODY,
  },
});
