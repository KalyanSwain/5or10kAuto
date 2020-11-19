import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StylesConfigheet,
  StatusBar,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import StylesConfig from "../config/StylesConfig";
import * as Animatable from "react-native-animatable";

function LoginScreen({ navigation }) {
  const [username, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={StylesConfig.container}>
      <View style={StylesConfig.containertop}>
        <Animatable.View
          animation="bounceInDown"
          iterationCount={1}
          direction="alternate"
        >
          <Image
            style={StylesConfig.icon}
            source={require("../assets/icon.png")}
          />
        </Animatable.View>
      </View>

      <View style={StylesConfig.containerbottom}>
        <Animatable.View
          animation="slideInLeft"
          iterationCount={1}
          direction="alternate"
        >
          <View>
            <Text
              style={{ fontFamily: "serif", fontSize: 30, color: "#046930" }}
            >
              5-Or-10K
            </Text>
            <Text style={{ fontFamily: "serif", color: "#046930" }}>
              Solution to your deductibles.
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text>Already have an Account! Please login</Text>
            <TextInput
              style={StylesConfig.input}
              onChangeText={(text) => onChangeUserName(text)}
              value={username}
              placeholder="Enter Username"
            />
            <TextInput
              style={StylesConfig.input}
              onChangeText={(text) => onChangePassword(text)}
              value={password}
              placeholder="Enter Password"
            />
          </View>

          <View>
            <View>
              <Button
                onPress={() => navigation.navigate("Home")}
                title="Login"
              />
            </View>
            <Text style={{ paddingTop: 10 }}>
              Need to see your quote? Click below.
            </Text>
            <View>
              <Button
                color="orange"
                onPress={() => navigation.navigate("QuickQuote")}
                title="Quick Quote"
              />
            </View>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
}

export default LoginScreen;
