import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
const styles = StyleSheet.create({
  container: {paddingTop: 5},
  headerRow: {flexDirection: 'row', justifyContent: 'space-between', padding:10},
  imageStyle: {height: 50, width: 50},
  menu: {alignSelf: 'center', marginLeft: 150, height: 50, width: 50},
});
const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/logo.png')}
        />
        </TouchableOpacity>
        <Image
          style={styles.menu}
          source={require('../assets/images/hamburger-icon.png')}
        />
      </View>
    </View>
  );
};
export default Header;
