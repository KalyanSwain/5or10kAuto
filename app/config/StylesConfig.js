import React from "react";
import { StyleSheet } from "react-native";

const StylesConfig = StyleSheet.create({
  containertop: {
    flex: 0.55,
    backgroundColor: "gold",
  },
  containerbottom: {
    flex: 0.45,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "gold",
  },
  input: {
    //width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  button: {
    padding: 20,
    flex: 0.3,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icon: {
    width: 250,
    height: 250,
    top: 100,
    left: 50,
    borderRadius: 150,
  },
  screenheader: {
    fontSize: 35,
    fontFamily: "serif",
    color: "#fff",
    fontWeight: "normal",
  },
});

export default StylesConfig;
