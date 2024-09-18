import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import {SelectList} from 'react-native-dropdown-select-list';
import {size, color, quantityValues} from '../data/DropDowns';

const Boot = props => {
  const propsRoute = props.route;
  const propsParams = propsRoute.params;
  
  const navigation = useNavigation();
  const [bootData, setBootData] = useState(propsParams);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(6);
  const [selectedColor, setSelectedColor] = useState(6);
  const getData = async () => {
    try {
      const api = await axios.get(
        `https://52fb39dd-35c6-4456-adc1-c4f1dcc59767.mock.pstmn.io/products`,
      );

      const data = api.data;

      let filterData = data.filter(x => x.id === propsParams.id);

      filterData = filterData[0];

      setBootData(filterData);
    } catch (error) {
      console.log('ERROR', error);
      setError(true);
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
    },
    bootTitleRow: {
      backgroundColor: '#000000',
      paddingTop: 10,
      marginTop: 5,
      alignItems: 'center',
    },
    bootTitle: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 30,
      color: '#FFFFFF',
    },
    bootImage: {
      height: 250,
      width: '100%',
      resizeMode: 'contain',
    },
    selectRow: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
    },
    selectText: {
      marginLeft: 10,
      alignSelf: 'center',
    },
    bootPrice: {
      alignSelf: 'center',
    },
    bootContent: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: '#000000',
      margin: 10,
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
      <ScrollView>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View>
            <View style={styles.bootTitleRow}>
              <Text style={styles.bootTitle}>
                {bootData?.name || 'Sample Name'}
              </Text>
            </View>
            <Image
              style={styles.bootImage}
              source={{uri: bootData?.image || ''}}
            />
            <Text style={[styles.bootContent, styles.bootPrice]}>
              ${bootData?.price || 0}
            </Text>
            <View style={styles.selectRow}>
              <Text style={styles.selectText}>Select Size: </Text>
              <SelectList
                setSelected={val => setSelectedSize(val)}
                data={size}
                save="value"
                search={false}
                dropdownStyles={{width: 100}}
                boxStyles={{width: 100}}
                defaultOption={{key: '6', value: '6'}}
              />
              <Text style={styles.selectText}>Select quantity: </Text>
              <SelectList
                setSelected={val => setQuantity(val)}
                data={quantityValues}
                save="value"
                search={false}
                dropdownStyles={{width: 100}}
                boxStyles={{width: 100}}
                defaultOption={{key: '1', value: '1'}}
              />
            </View>

            <View style={styles.selectRow}>
              <Text style={styles.selectText}>Select Color: </Text>
              <SelectList
                setSelected={val => setSelectedColor(val)}
                data={color}
                save="value"
                search={false}
                dropdownStyles={{width: 100}}
                boxStyles={{width: 100}}
                defaultOption={{key: '1', value: 'Brown'}}
              />
            </View>

            <Text style={styles.bootContent}>
              {bootData?.description || 'Sample Description'}
            </Text>
          </View>
        )}
        <Text style={styles.message} onPress={() => navigation.goBack()}>
          PRESS TO GO BACK
        </Text>
      </ScrollView>
    </View>
  );
};

export default Boot;
