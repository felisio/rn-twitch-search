import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "styles";

interface ToolsBarStyles {
  view: ViewStyle;
  refreshButton: ViewStyle;
}

export const styles = StyleSheet.create<ToolsBarStyles>({
  view: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  refreshButton: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.TWITCH,
    borderRadius: 4,
    color: Colors.WHITE,
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.TWITCH,
    borderRadius: 8,
    color: Colors.WHITE,
    paddingRight: 30,
  },
  iconContainer: {
    top: 13,
    right: 12,
  },
});
