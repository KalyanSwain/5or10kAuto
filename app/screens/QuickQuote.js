import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Button,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import axios from "axios";
import StylesConfig from "../config/StylesConfig";

const datas = require("../model/data.json");

function QuickQuote(props) {
  let insuredName;
  let address;
  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState([]);

  const goforAxios = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      setTimeout(() => {
        console.log(response.data.length);
        response.data.forEach((item) => {
          setItems([
            ...items,
            <Picker.Item
              label={item.name}
              value={item.username}
              key={item.id}
            />,
          ]);
        });
      });

      // response.data.forEach((item) => {
      //   setItems([...items, response.data]);
      // });

      //return response.data;
    });

    return items;
  };

  return (
    <View
      style={[
        StylesConfig.container,
        {
          backgroundColor: "#fff",
          // justifyContent: "flex-start",
          // alignContent: "flex-start",
        },
      ]}
    >
      <View
        style={[
          StylesConfig.containertop,
          {
            flex: 0.15,
            alignItems: "flex-end",
            flexDirection: "row",
            paddingLeft: 20,
            paddingBottom: 10,
            fontSize: 30,
            borderBottomEndRadius: 40,
          },
        ]}
      >
        <Text style={StylesConfig.screenheader}>Quick Quote</Text>
      </View>
      <View style={[StylesConfig.containerbottom, { flex: 0.85 }]}>
        <TextInput
          style={StylesConfig.input}
          // onChangeText={(text) => onChangeUserName(text)}
          value={insuredName}
          placeholder="Enter Insured Name"
        />
        <TextInput
          style={StylesConfig.input}
          // onChangeText={(text) => onChangePassword(text)}
          value={address}
          placeholder="Enter Address"
        />
        <View style={[StylesConfig.input, { padding: 0 }]}>
          <Picker
            style={{
              //position: "absolute",
              top: -5,
              flexDirection: "row",
              alignContent: "flex-start",
            }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              console.log(selectedValue);
            }}
          >
            <Picker.Item label="Select Vehicle Type" value="" />
            {}
          </Picker>
        </View>
        <Button onPress={() => goforAxios()} title="get Axios" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containertop: {
    flex: 0.2,
  },
  containerbottom: {
    flex: 0.7,
  },
});

export default QuickQuote;
