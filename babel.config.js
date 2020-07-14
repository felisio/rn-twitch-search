module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
      "module:react-native-dotenv",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".tsx", ".json"],
          alias: {
            "src/*": ["./src/"],
            "test/*": ["./test/"],
            "navigations/*": ["./src/navigations/"],
            "components/*": ["./src/components/"],
            "screens/*": ["./src/screens/"],
            "styles/*": ["./src/styles/"],
            "containers/*": ["./src/containers/"],
            "hooks/*": ["./src/hooks"],
            "interfaces/*": ["./src/interfaces"],
          },
        },
      ],
    ],
  };
};
