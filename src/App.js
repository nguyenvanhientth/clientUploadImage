import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight,Image} from 'react-native';
import upload from './components/api/showImage';
import imageUpload from './components/api/uploadImage';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatarSource: null,
            data: null
        }
    }

    show(){
        upload((source,data) => this.setState({avatarSource: source,data:data}) )
    }
    uploadImage(){
        imageUpload([
            { name : 'info', data : 'VanHien'},
            { name : 'hinh', filename : 'avatar.png', data: this.state.data}
        ])
        .then(res => console.log(res))
        .catch(err => console.warn('asd',err));
        //debugger;
    }
    render() {
        let img = this.state.avatarSource = null ? null : 
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <TouchableHighlight onPress = {this.show.bind(this)}>
              <Text>Show image</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress = {this.uploadImage.bind(this)}>
              <Text>Upload image</Text>
          </TouchableHighlight>
            {img}  
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    uploadAvatar: {
        height: 200,
        width: 200,
    }
  });

  