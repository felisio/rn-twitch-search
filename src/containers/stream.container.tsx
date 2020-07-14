import React, { useState, useEffect } from "react";
import { StreamListView } from "components/StreamListView/StreamListView";
import { useStreams } from "hooks/use-streams";
import { Stream, StreamList } from "interfaces/stream.interfaces";

interface IStreamContainer {
  goToDetails: (item: Stream) => void;
}

const PickerListitems = [
  { label: "25", value: "25" },
  { label: "20", value: "20" },
  { label: "10", value: "10" },
];

const StreamContainer: React.FC<IStreamContainer> = ({ goToDetails }) => {
  const [initialState, setInitialState] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pickerValue, setPickerValue] = useState<string>(
    PickerListitems[0].value
  );
  const [streams, setStreams] = useState<Stream[]>([]);
  const { response, loading, error, getStreamList } = useStreams();

  const searchStreams = async (value: string) => {
    if (value.length < 3) return;
    const resultStreams = (await getStreamList(
      value,
      pickerValue
    )) as StreamList;
    if (response.ok) {
      setStreams(resultStreams.streams);
      setInitialState(false);
    }
  };

  useEffect(() => {
    if (searchValue) {
      searchStreams(searchValue);
    } else {
      setStreams([]);
      setInitialState(true);
    }
  }, [searchValue, pickerValue]);

  return (
    <StreamListView
      onPressItem={goToDetails}
      streamList={streams}
      initialState={initialState}
      loading={loading}
      error={error ? true : false}
      initialInputValue={searchValue}
      onChangeText={setSearchValue}
      onClearInput={() => setSearchValue("")}
      onSubmitValue={setSearchValue}
      pickerList={PickerListitems}
      initialPickerValue={pickerValue}
      onPickerChange={setPickerValue}
      onPressRefresh={() => searchStreams(searchValue)}
    />
  );
};

export { StreamContainer };
