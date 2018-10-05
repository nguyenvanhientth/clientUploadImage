
var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };


let upload = (cb) =>{
    ImagePicker.showImagePicker(options, (response) => {
        // console.log('Response = ', response);
        
         if (response.didCancel) {
           console.log('User cancelled image picker');
         }
         else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         }
         else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         }
         else {
           let source = { uri: response.uri };
        
           // You can also display the image using data:
           // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            cb(source, response.data);
         }
       });
  }
module.exports  = upload ;