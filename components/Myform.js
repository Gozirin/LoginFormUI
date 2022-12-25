import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder='Username'
        style={styles.input}/>

        <TextInput
        placeholder='Password'
        style={styles.input}/>
       
        <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },

    input: {
        height: 40,
        width:350,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius:10,
        paddingLeft: 10,
        marginBottom: 15,
        
    },

    buttoncontainer: {
        backgroundColor: '#27ae60',
        padding:10,
        marginTop: 10,
        paddingVertical:15,
    },

    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
     },

});