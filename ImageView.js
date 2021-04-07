import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React from 'react';                          
import {Image} from 'react-native';

export default function ImageView (props) {
  return (
    // <Modal visible={true} transparent={true}>
        <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}/>
    // </Modal>
  );
} 