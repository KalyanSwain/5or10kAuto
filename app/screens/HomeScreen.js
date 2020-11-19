import React from "react";
import { View, Text } from "react-native";
import StylesConfig from "../config/StylesConfig";

function HomeScreen(props) {
  return (
    <View style={StylesConfig.container}>
      <Text>Welcome to this page</Text>
    </View>
  );
}

export default HomeScreen;
