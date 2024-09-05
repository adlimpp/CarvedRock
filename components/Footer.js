import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Footer = () => {
  const [email, setEmail] = useState('Enter email address');
  return (
    <View>
      <View style={styles.contianer}>
        <Text style={styles.updates}>EMAIL UPDATES</Text>
        <Text style={styles.offers}>
          Exclusive sales, special offers, and more.
        </Text>
        <TextInput
          style={styles.footerInput}
          onChangeText={e => setEmail(e)}
          value={email}
        />
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contianer}>
        <Text style={styles.support}>Customer Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: '#686868',
    height: 190,
    paddingLeft: 50,
    paddingTop: 30,
    marginTop: 12,
  },
  updates: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#000000',
    paddingBottom: 5,
  },
  offers: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 12,
    color: '#000000',
    paddingBottom: 10,
  },
  footerInput: {
    borderWidth: 1,
    width: 175,
    height: 40,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans-Light',
  },
  footerButton: {
    width: '40%',
    backgroundColor: '#000000',
    marginTop: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  support: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
  supportOptions: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    paddingBottom: 3,
  },
});

export default Footer;
