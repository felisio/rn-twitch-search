import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "styles";

interface ButtonStyles {
  view: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<ButtonStyles>({
  view: {
    paddingHorizontal: 5,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 18,
  },
});
