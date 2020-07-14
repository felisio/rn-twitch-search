import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigations/stack.navigation";
import { StreamDetailContainer } from "containers/stream-detail.container";

type StreamDetailScreenRouteProp = RouteProp<RootStackParamList, "Stream">;

const StreamDetailScreen: React.FC = () => {
  const { params } = useRoute<StreamDetailScreenRouteProp>();
  const { item } = params;
  return <StreamDetailContainer stream={item} />;
};

export { StreamDetailScreen };
