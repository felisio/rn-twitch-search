import { StyleSheet, ViewStyle } from "react-native";
import { WINDOW_WIDTH } from "styles";

interface StreamPlayerStyles {
  view: ViewStyle;
  videoView: ViewStyle;
}

export const styles = StyleSheet.create<StreamPlayerStyles>({
  view: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  videoView: {
    marginTop: 0,
    height: 250,
    width: WINDOW_WIDTH - 30,
  },
});
