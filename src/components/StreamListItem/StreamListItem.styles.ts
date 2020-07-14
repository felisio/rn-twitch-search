import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Colors, WINDOW_WIDTH } from "styles";

interface StreamListItemStyles {
  view: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}
const WIDTH = WINDOW_WIDTH / 2 - 20;
export const styles = StyleSheet.create<StreamListItemStyles>({
  view: {
    flexDirection: "column",
    margin: 2,
    borderWidth: 1,
    borderColor: Colors.TWITCH,
  },
  card: {
    width: WIDTH,
    backgroundColor: Colors.GRAY_1,
  },
  image: {
    height: 150,
    backgroundColor: Colors.GRAY_1,
  },
  text: {
    fontSize: 18,
    color: Colors.WHITE,
    marginLeft: 10,
  },
});
