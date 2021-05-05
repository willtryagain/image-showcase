import React from "react";
import { TouchableHighlight, View, ScrollView } from "react-native";
import styles from "./styles";
import Box from "./Box";

export default function App() {
  return (
    <ScrollView>
      <TouchableHighlight>
        <View style={styles.container}>
          <Box>#1</Box>
        </View>
      </TouchableHighlight>
      
      <View style={styles.container}>
        <Box>#2</Box>
      </View>
      <View style={styles.container}>
        <Box>#3</Box>
      </View>
      <View style={styles.container}>
        <Box>#4</Box>
      </View>
    </ScrollView>
    
  );
}
