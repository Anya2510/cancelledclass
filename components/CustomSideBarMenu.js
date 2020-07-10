import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity,ImageBackground,Platform, ImagePickerIOS} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import {Avatar} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import db from '../config';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  uploadImage=async(uri,imageName)=>{
    var response=await fetch(uri)
    var blob=await response.blob()
  }
  render(){
    return(
      <View style={{flex:1}}>
         <Avatar
         souce={{
           uri:this.state.image
          }}
          size="medium"
          onPress={()=>{
this.selectPicture()
}}
containerStyle={styles.imageContainer}
showEditButton
         />
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
