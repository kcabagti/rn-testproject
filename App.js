import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, ImageBackground} from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import styles from './styles.style';


const PlaceholderImage = require('./assets/images/background-image.png');
const image = {uri: 'https://www.uic.edu.ph/wp-content/uploads/2014/11/NIY_0345.jpg'};

export default function Application() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>


    
      <View style={styles.imageContainer}>
      <View style={styles.overlay} />
      

          <ImageViewer placeholderImageSource={PlaceholderImage} />
          <Image source={require('./assets/images/myuicportal.png')} />
          <Text>
          
            <View style={{margin:10, flexDirection: 'row', flex:6, paddingTop: 30}}>
              <TextInput 
                placeholder="USERNAME"
                underlineColorAndroid = "#616161"
                onChangeText={(text) => { this.state({ username: text}) }}
                style={{ borderWidth: 2, borderColor: 'transparent', margin: 5, height: 50, width: 100, fontSize: 16}}
              />
              <TextInput
                placeholder="PASSWORD"
                underlineColorAndroid = "#616161"
                onChangeText={(text) => { this.state({ password: text}) }}
                
                style={{ borderWidth: 2, borderColor: 'transparent', margin: 5, height: 50, width: 100, fontSize: 16}}
                
              />
            </View>
          </Text>
      </View>
    <View style={styles.footerContainer}>
      <Button theme="primary" label="LOGIN" />
      <Button theme="primary" label="Sign In" />
      {/* <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} /> */}

      <Text style={{color: '#039BE5', fontSize: 14, paddingTop: 20}}
        onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Forgot Password?
      </Text>
      <Text style={{color: '#039BE5', fontSize: 14}}
        onPress={() => Linking.openURL('https://my.uic.edu.ph/index.cfm?fa=login.reset_password_request')}> Open a Support Ticket
      </Text> 
      
    </View>
    </ImageBackground>
    {/* <StatusBar style="auto"  /> */}
    
    
    </View>
    
  );
}
