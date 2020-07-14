import useFetch from "use-http";
import { API_URL, CLIENT_ID, ACCEPT } from "react-native-dotenv";
import { StreamList, StreamItem } from "interfaces/stream.interfaces";

const useStreams = () => {
  const fetch = useFetch(API_URL, (options) => {
    options.headers = {
      "Client-ID": CLIENT_ID,
      Accept: ACCEPT,
    };
    return options;
  });

  const getStreamList = async (value: string, limit: string) => {
    return await fetch.get(`/search/streams?query=${value}&limit=${limit}`);
  };

  const getStreamById = async (id: number) => {
    return await fetch.get(`/streams/${id}`);
  };

  return {
    ...fetch,
    getStreamList,
    getStreamById,
  };
};

export { useStreams };
