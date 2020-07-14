import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "screens/home.screen";
import { StreamDetailScreen } from "screens/stream-detail.screen";
import { StorybookScreen } from "screens/storybook.screen";
import { Colors } from "styles";
import { Button } from "components/Button/Button";
import { Stream } from "interfaces/stream.interfaces";

export type RootStackParamList = {
  Home: undefined;
  Stream: { item: Stream };
  Storybook: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.TWITCH,
        },
        headerTintColor: Colors.WHITE,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Twitchs",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Storybook")}
              text="book"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Stream"
        component={StreamDetailScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen name="Storybook" component={StorybookScreen} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
