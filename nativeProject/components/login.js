import { StyleSheet, Image, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log("Error sending code", error);
    }
  }

  async function confirmCode() {
    if (confirm) {
      try {
        await confirm.confirm(code);
        alert('Success');
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />
      <Image
        style={styles.walpap}
        source={require("../assets/home_walpap.jpg")}
      />
      <View style={styles.inputfield}>
        <Image
          style={styles.icon}
          source={require("../assets/home_user.jpg")}
        />
        <TextInput style={styles.input} placeholder="Mobile No." />
        <Text
          style={{
            color: "#7d7d7d",
            paddingHorizontal: 12,
            borderLeftWidth: 1,
          }}
          onPress={() => signInWithPhoneNumber("+1 650-555-3434")}
        >
          Send OTP
        </Text>
      </View>
      <View style={styles.inputfield}>
        <Image style={styles.icon} source={require("../assets/home_otp.jpg")} />
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={code}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <View style={styles.login}>
        <Button title="Login" onPress={() => navigation.navigate("Home")} />
        {/* confirmCode() */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  input: {
    color: "#6d4142",
    flexGrow: 1,
  },

  inputfield: {
    backgroundColor: "#f6f4f5",
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },

  login: {
    width: "80%",
  },

  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
  },

  logo: {
    resizeMode: "contain",
    width: 130,
    height: 80,
  },

  walpap: {
    resizeMode: "contain",
    backgroundColor: "#000",
    width: 200,
    height: 200,
  },
});

export default Login;
