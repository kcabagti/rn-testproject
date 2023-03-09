import { StyleSheet, View, Pressable, Text } from 'react-native';
import styles from './Button.component.style';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme }) {
  if (theme === "primary") {
    return (
      <View
      style={[
        styles.buttonContainer,
        { borderWidth: 1, borderColor:'transparent', borderRadius: 5, padding: 7},
      ]}>
      <Pressable
        style={[styles.button, { background:'#E5496B' }]}
        onPress={() => alert('You pressed a button.')}> 
        {/* <FontAwesome name="google" size={18} color="#25292e" style={styles.buttonIcon} /> */}
        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
      </Pressable>
    </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>    
  );
}
