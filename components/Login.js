import { View, Text, Image, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native'
import React, { Component } from 'react'
import Myform from './Myform';


export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding"style={styles.container}>
              <View style={styles.logocontainer}>
                <Image
                  style={styles.logo}
                  source={require('./images/logo.jpeg')}/>
                 <Text style={styles.title}>
                    A Simple Login App</Text>
                </View>

              <View style={styles.myform}>
                <Myform/>
              </View>
            </KeyboardAvoidingView>
        );
    }
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        //backgroundColor: '#282783',
 
    },

    logocontainer:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
     
    title: {
      color: 'red',
    //   marginTop: 15,
    },

    myform: {
        flex: 1,
    },

  });