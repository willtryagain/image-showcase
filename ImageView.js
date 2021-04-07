import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React from 'react';                          
import {Image} from 'react-native';

export default function ImageView (props) {
  return (
    // <Modal visible={true} transparent={true}>
    <Image source={{uri: props.uri}}
    style={{width: 400, height: 400}} />
    // </Modal>
  );
} 