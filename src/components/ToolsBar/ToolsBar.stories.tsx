import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ToolsBar, IPickerItem } from "./ToolsBar";
import { View } from "react-native";
import { Colors } from "styles";

const items = [
  { label: "25", value: "25" },
  { label: "20", value: "20" },
  { label: "10", value: "10" },
];

storiesOf("ToolsBar", module).add("default component", () => (
  <View style={{ flex: 1, backgroundColor: Colors.BCK_BODY }}>
    <ToolsBar
      pickerList={items}
      initialPickerValue="25"
      onPickerChange={(value) => false}
      onPressRefresh={() => false}
    />
  </View>
));
