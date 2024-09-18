import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ShopItem = ({id, name, image, price, category}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', paddingBottom: 30},
    shopImage: {height: 300, width: '100%', resizeMode: 'contain'},
    itemTextRow: {alignItems: 'center'},
    itemText: {
      fontFamily: 'OpenSans-SemiBold',
      paddingHorizontal: 20,
      fontSize: 20,
      color: '#000000',
    },
  });
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(category, {id, name, image, price, category})
      }>
      <View style={styles.container}>
        <Image style={styles.shopImage} source={{uri: image}} />
        <View style={styles.itemTextRow}>
          <Text style={styles.itemText}>{name}</Text>
          <Text style={styles.itemText}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopItem;
