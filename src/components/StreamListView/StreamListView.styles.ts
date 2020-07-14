import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "styles";

interface StreamListViewStyles {
  view: ViewStyle;
  headerView: ViewStyle;
  toolBarView: ViewStyle;
}

export const styles = StyleSheet.create<StreamListViewStyles>({
  view: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.BCK_BODY,
  },
  headerView: {
    backgroundColor: Colors.BCK_BODY,
    paddingTop: 20,
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  toolBarView: {
    backgroundColor: Colors.BCK_BODY,
    paddingTop: 10,
    paddingRight: 20,
  },
});
