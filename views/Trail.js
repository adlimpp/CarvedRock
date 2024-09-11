import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TrailItem = ({id, title, author, review, image}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => navigation.navigate('TrailDetail', {id})}>
        {title}
      </Text>
      <Image style={styles.trialImage} source={{uri: image}} />
      <Text style={styles.author}>By: {author}</Text>
    </View>
  );
};
const Trail = props => {
  const navigation = useNavigation();
  const [remoteData, setRemoteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const data = await axios.get(
        'https://52fb39dd-35c6-4456-adc1-c4f1dcc59767.mock.pstmn.io/trailreviews',
      );
      console.log('DATA', data.data);
      setRemoteData(data.data || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log({remoteData});
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.reviewTitleRow}>
        <Text style={styles.reviewTitle}>Trail Review</Text>
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={remoteData}
          renderItem={({item}) => <TrailItem {...item} />}
          keyExtractor={item => item.id}
        />
      )}

      <Text style={styles.message} onPress={() => navigation.goBack()}>
        PRESS TO GO BACK
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {flex: 1, borderBottomWidth: 1},
  title: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
    paddingTop: 10,
  },
  trialImage: {height: 200, width: 500, resizeMode: 'cover'},
  author: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'OpenSans-Italic',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  container: {flex: 1},
  reviewTitleRow: {backgroundColor: '#000000', paddingTop: 10, marginTop: 5},
  reviewTitle: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 30,
  },
  message: {
    color: '#000000',
    fontFamily: 'OpenSans-BoldItalic',
    alignSelf: 'center',
  },
});

export default Trail;
