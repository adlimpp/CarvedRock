import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const [name, setName] = useState('Enter Name');
  const [email, setEmail] = useState('Enter Email');
  const [message, setMessage] = useState('Enter Message');

  const showMessage = () => {
    Alert.alert(`${name}`, `${message}`);
  };

  const styles = StyleSheet.create({
    container: {flex: 1},
    imageStyle: {height: 200, width: '100%', marginBottom: 20},
    title: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 30,
      color: '#000000',
      alignSelf: 'center',
      paddingBottom: 15,
    },
    input: {
      alignSelf: 'center',
      borderWidth: 1,
      width: 300,
      height: 40,
      textAlign: 'center',
      marginVertical: 10,
      backgroundColor: '#FFFFFF',
      fontFamily: 'OpenSans-Regular',
    },
    messageInput: {
      alignSelf: 'center',
      borderWidth: 1,
      width: 320,
      textAlign: 'center',
      marginVertical: 10,
      backgroundColor: '#FFFFFF',
      fontFamily: 'OpenSans-Regular',
    },
    submitButton: {
      width: '80%',
      backgroundColor: '#1ADE64',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 5,
      margin: 15,
    },
    buttonText: {fontSize: 30, color: '#FFFFFF'},
    cancelButton: {
      width: '80%',
      backgroundColor: '#F12748',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 5,
      margin: 15,
    },
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/hiking.jpg')}
        />
        <Text style={styles.title}>Leave Us a Message!</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.messageInput}
          onChangeText={text => setMessage(text)}
          value={message}
          multiline={true}
          numberOfLines={10}
        />
        <TouchableOpacity style={styles.submitButton} onPress={showMessage}>
          <Text style={styles.buttonText}>SEND MESSAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Contact;
