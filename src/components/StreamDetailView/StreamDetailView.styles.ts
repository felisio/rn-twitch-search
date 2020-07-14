import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "styles";

interface StreamDetailViewStyles {
  view: ViewStyle;
  titleView: ViewStyle;
  title: TextStyle;
  viewers: TextStyle;
  descView: ViewStyle;
  desc: TextStyle;
}

export const styles = StyleSheet.create<StreamDetailViewStyles>({
  view: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.BCK_BODY,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    color: Colors.TWITCH,
  },
  viewers: {
    color: Colors.WHITE,
  },
  descView: {
    marginTop: 20,
  },
  desc: {
    color: Colors.WHITE,
  },
});
