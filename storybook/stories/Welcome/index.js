import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to Storybook</Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
