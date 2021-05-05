import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
   var aa = new Date()

class Inputs extends Component {
   state = {
      Title: '',
      Date: aa.getDate() + '-' + (aa.getMonth()+1) + '-' +aa.getFullYear(),
      Order:'',
      Quantity:''
   } 
   handleEmail = (text) => {
      this.setState({ Title: text })
   }
   handlePassword = (text) => {
      this.setState({ Order: text })
   }
   handlenum = (text) => {
      this.setState({ Quantity: text })
   }
   login = (Title, Date, Order,Quantity) => {
      alert('Title: ' + Title + ' Created on: ' + Date + ' Order: ' + Order + ' Quantity: ' + Quantity)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Title"
               placeholderTextColor = "#00bfff"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text style={styles.box}>
            {this.state.Date}</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Order"
               placeholderTextColor = "#00bfff"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
                     <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Quantity"
               placeholderTextColor = "#00bfff"
               autoCapitalize = "none"
               onChangeText = {this.handlenum}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.Title, this.state.Date, this.state.Order, this.state.Quantity)
               }>
               <Text style = {styles.submitButtonText}>
                Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      flex:1,
      padding:1
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#00bfff',
      borderWidth: 4,
      padding:5
   },
   submitButton: {
      backgroundColor: '#00bfff',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
      width:100

   },
   submitButtonText:{
      color: 'black',
   },
   box:{
      margin: 15,
      height: 40,
      borderColor: '#00bfff',
      borderWidth: 4,
      padding:8,
      color:'white',
      backgroundColor:'#00bfff'
   }
})