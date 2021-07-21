import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, View } from 'react-native';

export default class LogIn extends Component {
    render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#000000"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>
          Login Page
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username or email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
        <View style={styles.buttonContainer}> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC80',
  },
  welcome: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 10,

  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0000FF",
    padding: 14,
    width: "40%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",

  },
});

AppRegistry.registerComponent('LogIn', () => LogIn);