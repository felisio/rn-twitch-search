import { storiesOf } from "@storybook/react-native";
import React from "react";
import { EmptyState } from "./EmptyState";

storiesOf("EmptyState", module).add("default component", () => (
  <EmptyState type="error" text="Error test state" />
));
