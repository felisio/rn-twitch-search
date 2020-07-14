import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StreamContainer } from "containers/stream.container";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "navigations/stack.navigation";

type HomeScreenNavigationType = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation<HomeScreenNavigationType>();
  return (
    <StreamContainer goToDetails={(item) => navigate("Stream", { item })} />
  );
};

export { HomeScreen };
