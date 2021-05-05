import React from "react";
import { Image, Dimensions } from "react-native";
import ImageZoom from 'react-native-image-pan-zoom';
import styles from "./styles";
export default function ImageView(props) {
  return (
    <ImageZoom cropWidth={Dimensions.get('window').width}
    cropHeight={Dimensions.get('window').height}
    imageWidth={Dimensions.get('window').width}
    imageHeight={Dimensions.get('window').height}>
      <Image  key={props.ind} source={{ uri: props.uri }} style={{
    height: Dimensions.get('window').height - 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 5,
    borderColor: '#000000'
  }}  />
    </ImageZoom>
  );
}
