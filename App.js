import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import ImageView from './ImageView';


const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  height: 200,
  flexDirection: 'row'
};

export default function App() {
  var uris = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
  ]

  var images = [];
  for (let index = 0; index < uris.length; index++) {
    images.push(<ImageView key={index} uri={uris[index]}/>)
  }

  return (
    <ScrollView style={{ alignSelf: 'center'}}> 
      <Text style={{ textAlign: 'center',  fontSize:  50}}>Order-Title</Text>
      {images}
    </ScrollView>
  );
  
}
