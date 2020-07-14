import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "styles/colors";
import { WINDOW_WIDTH } from "styles";

interface InputSearchStyles {
  view: ViewStyle;
  input: ViewStyle;
  clearView: ViewStyle;
  clearText: TextStyle;
  optionsView: ViewStyle;
}

export const styles = StyleSheet.create<InputSearchStyles>({
  view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    height: 36,
    width: WINDOW_WIDTH - 100,
    paddingHorizontal: 10,
    backgroundColor: Colors.EBONY_CLAY,
    color: Colors.WHITE,
    borderRadius: 5,
  },
  clearView: {
    padding: 2,
    marginLeft: 5,
  },
  clearText: {
    color: Colors.TWITCH,
    fontSize: 17,
  },
  optionsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
