import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors, WINDOW_HEIGHT, WINDOW_WIDTH } from "styles";

interface EmptyStateStyles {
  view: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<EmptyStateStyles>({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.BCK_BODY,
  },
  text: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 18,
  },
});
