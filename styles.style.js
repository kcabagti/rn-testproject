
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex:1, 
    paddingTop: 50,
    alignItems: 'center', // email, progdate and prog
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    
   
  },
  
  
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  
    width: null,
    height: null,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
  text: {
    color: '#FFFFF',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    position: 'absolute',
    top: 150,
    left: 15,
    right: 15,
    bottom: -200
  },
  
 

});