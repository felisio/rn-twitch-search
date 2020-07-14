import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles, pickerSelectStyles } from "./ToolsBar.styles";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "styles";

export interface IPickerItem {
  label: string;
  value: string;
}

export interface IToolsBar {
  pickerList: IPickerItem[];
  initialPickerValue: string;
  onPickerChange: (value: string) => void;
  onPressRefresh: () => void;
}

const ToolsBar: React.FC<IToolsBar> = ({
  pickerList,
  initialPickerValue,
  onPickerChange,
  onPressRefresh,
}) => {
  return (
    <View style={styles.view}>
      <RNPickerSelect
        onValueChange={onPickerChange}
        value={initialPickerValue}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        items={pickerList}
        Icon={() => {
          return (
            <Ionicons name="ios-arrow-down" size={20} color={Colors.WHITE} />
          );
        }}
      />
      <TouchableOpacity style={styles.refreshButton} onPress={onPressRefresh}>
        <Ionicons name="ios-refresh" size={30} color={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

export { ToolsBar };
