import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import ShopItem from '../components/ShopItem';

const ClimbingShop = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [remoteData, setRemoteData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const data = await axios.get(
        'https://52fb39dd-35c6-4456-adc1-c4f1dcc59767.mock.pstmn.io/products',
      );
      const dataArray = data.data;

      const filteredData = dataArray.filter(x => x.category == 'Climbing');
      setRemoteData(filteredData || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FC8A49',
    },
    storeTitleRow: {
      backgroundColor: '#000000',
      paddingTop: 10,
      marginTop: 5,
      alignItems: 'center',
    },
    storeTitle: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 30,
      color: '#FFFFFF',
    },
    message: {
      alignSelf: 'center',
      fontFamily: 'OpenSans-BoldItalic',
      color: '#000000',
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.storeTitleRow}>
        <Text style={styles.storeTitle}>Shop Climbing Gear</Text>
      </View>

      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={remoteData}
          renderItem={({item}) => <ShopItem {...item} />}
          keyExtractor={item => item.id}
        />
      )}

      <Text style={styles.message} onPress={() => navigation.goBack()}>
        PRESS TO GO BACK
      </Text>
    </View>
  );
};

export default ClimbingShop;
