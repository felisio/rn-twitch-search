import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button } from "./Button";
import { View } from "react-native";
import { Colors } from "styles";

storiesOf("Button", module).add("default component", () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.BCK_BODY,
    }}
  >
    <Button text="Button Component" onPress={() => false} />
  </View>
));
