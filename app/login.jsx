import React from "react";
import { View, Text, TextInput, Image, Pressable, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";
import logo from "../assets/logo.png";
import bgPattern from "../assets/bg-pattern.jpg";

export default function Login() {
  return (
    <ImageBackground source={bgPattern} style={styles.container} resizeMode="cover">
      <View style={styles.logoBox}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.formBox}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue...</Text>

        <TextInput
          placeholder="Enrollment Number"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>

        <Text style={styles.link}>Forgot Password?</Text>
        <Link href="/signup" asChild>
          <Pressable>
            <Text style={[styles.link, styles.signup]}>Sign up</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  formBox: {
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
  },
  signup: {
    color: "#00BFFF",
  },
});
