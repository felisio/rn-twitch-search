import React, { useState, useEffect } from "react";
import { StreamDetailView } from "components/StreamDetailView/StreamDetailView";
import { Stream, StreamItem } from "interfaces/stream.interfaces";
import { useStreams } from "hooks/use-streams";

interface IStreamDetailContainer {
  stream: Stream;
}

const INTERVAL = 8000;

const StreamDetailContainer: React.FC<IStreamDetailContainer> = ({
  stream,
}) => {
  const { game, channel, viewers } = stream;
  const [localViewers, setLocalViewers] = useState<number>(viewers);
  const { getStreamById } = useStreams();

  useEffect(() => {
    const interval = setInterval(async () => {
      const streamResponse = (await getStreamById(channel._id)) as StreamItem;
      setLocalViewers(streamResponse.stream.viewers);
    }, INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [localViewers]);

  return (
    <StreamDetailView
      title={game}
      description={channel.description}
      viewers={localViewers}
      uri={channel.url}
    />
  );
};

export { StreamDetailContainer };
