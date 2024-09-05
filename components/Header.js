import {Image, StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  container: {paddingTop: 5},
  headerRow: {flexDirection: 'row'},
  imageStyle: {height: 100, width: '50%'},
  menu: {alignSelf: 'center', marginLeft: 150},
});
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={styles.menu}
          source={require('../assets/images/hamburger-icon.png')}
        />
      </View>
    </View>
  );
};
export default Header;
