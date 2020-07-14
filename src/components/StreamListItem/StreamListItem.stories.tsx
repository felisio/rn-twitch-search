import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { StreamListItem } from "./StreamListItem";

storiesOf("StreamListItem", module).add("default component", () => (
  <View style={{ padding: 40, width: "67%" }}>
    <StreamListItem
      onPressItem={() => false}
      title="StarCraft II"
      image="https://www.fillmurray.com/640/360"
    />
  </View>
));
