export interface Stream {
  _id: number;
  game: string;
  preview: {
    large: string;
  };
  viewers: number;
  channel: {
    _id: number;
    url: string;
    description: string;
  };
}

export interface StreamList {
  streams: Stream[];
}

export interface StreamItem {
  stream: Stream;
}
