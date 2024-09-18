import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Shops = ({imageSrc, title, description, target}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
    },
    background: {
      resizeMode: 'cover',
      height: 180,
      flexDirection: 'column-reverse',
    },
    titleRow: {
      height: 50,
      width: '100%',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    shopTitle: {
      fontFamily: 'OpenSans-ExtraBold',
      fontSize: 24,
      color: '#000000',
    },
    shopDescription: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: '#FC8A49',
    },
  });
  const image = {uri: imageSrc};
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(target)}>
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.titleRow}>
            <Text style={styles.shopTitle}>{title}</Text>
            <Text style={styles.shopDescription}>{description}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Shops;
