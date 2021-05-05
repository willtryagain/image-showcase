import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ImageView from "./ImageView";
import styles from "./styles";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  height: 200,
  flexDirection: "row",
};

export default function App() {
  // var { photos } = route.params;
  // var uris = photos.map((base64) => {
  //   return "data:image/png;base64," + base64;
  // });

  var uris = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
  ];
  uris.push(uris[0]);
  uris.push(uris[0]);
  uris.push(uris[0]);

  var images = [];
  for (let index = 0; index < uris.length; index++) {
    images.push(
      <View style={styles.container} key={index + 1}>
        <ImageView ind={index + 1} key={index + 1} uri={uris[index]} />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* <Text style={{ textAlign: "center", fontSize: 50 }}>Order-Title</Text> */}
      {images}
    </ScrollView>
  );
}
