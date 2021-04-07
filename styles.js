import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
 },
 backgroundImage:{
  width: Dimensions.get('window').width ,
  alignSelf: 'center',
  height: 200,
}
});
