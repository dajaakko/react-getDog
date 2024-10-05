import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import getDog from "./hooks/getDog";
import { Image } from "react-native";
import { useEffect } from "react";
import React from "react";
import { Button } from "react-native";
import { ActivityIndicator } from "react-native";

export default function App() {
  const { message, loading, error, fetchDog } = getDog();

  const handleClick = () => {
    fetchDog();
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here is your random doggo</Text>
      <View>
        {loading === false ? (
          <Image source={{ uri: message }} style={styles.image} />
        ) : (
          <ActivityIndicator size="large" />
        )}
        {error && <Text style={styles.text}>{error}</Text>}
        <StatusBar style="auto" />
        <Button title="New Doggo" onPress={handleClick} style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 350,
    height: 300,
    marginBottom: 40, // Add margin to the image
  },
  btn: {
    marginBottom: 30,
  },
});
