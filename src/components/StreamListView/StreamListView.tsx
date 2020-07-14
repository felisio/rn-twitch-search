import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./StreamListView.styles";
import { InputSearch } from "components/InputSearch/InputSearch";
import { StreamListItem } from "components/StreamListItem/StreamListItem";
import { EmptyState } from "components/EmptyState/EmptyState";
import { Loading } from "components/Loading/Loading";
import { Stream } from "interfaces/stream.interfaces";
import { ToolsBar, IPickerItem } from "components/ToolsBar/ToolsBar";

export interface IStreamListView {
  streamList: Stream[];
  initialState: boolean;
  loading: boolean;
  error: boolean;
  onPressItem: (item: Stream) => void;
  initialInputValue: string;
  onChangeText: (value: string) => void;
  onSubmitValue: (value: string) => void;
  onClearInput: () => void;
  pickerList: IPickerItem[];
  initialPickerValue: string;
  onPickerChange: (value: string) => void;
  onPressRefresh: () => void;
}

const StreamListView: React.FC<IStreamListView> = ({
  streamList = [],
  initialState = false,
  loading = false,
  error = false,
  onPressItem,
  initialInputValue = "",
  onChangeText,
  onSubmitValue,
  onClearInput,
  pickerList,
  initialPickerValue,
  onPickerChange,
  onPressRefresh,
}) => {
  const renderHeader = () => (
    <>
      <View style={styles.headerView}>
        <InputSearch
          value={initialInputValue}
          onChangeText={onChangeText}
          onSubmitValue={onSubmitValue}
          onClear={onClearInput}
          placeholder="Search a game ..."
        />
      </View>
      <View style={styles.toolBarView}>
        <ToolsBar
          pickerList={pickerList}
          initialPickerValue={initialPickerValue}
          onPickerChange={onPickerChange}
          onPressRefresh={onPressRefresh}
        />
      </View>
    </>
  );

  const renderItem = (item: Stream) => (
    <StreamListItem
      onPressItem={() => onPressItem(item)}
      title={item.game}
      image={item.preview.large}
    />
  );

  const renderList = () => {
    if (loading) return <Loading />;

    if (error) return <EmptyState type="error" />;

    if (initialState)
      return <EmptyState type="initial" text="Search for Streams" />;

    if (!streamList.length) return <EmptyState type="empty" />;

    return (
      <View style={styles.view}>
        <FlatList
          nestedScrollEnabled={true}
          horizontal={false}
          numColumns={2}
          data={streamList}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item, index }) => renderItem(item)}
          ListEmptyComponent={<EmptyState type="empty" />}
        />
      </View>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderList()}
    </>
  );
};

export { StreamListView };
