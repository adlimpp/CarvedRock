import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';

const TrailDetail = ({route, navigation}) => {
  const [trailData, setTrailData] = useState(route.params);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const data = route?.params?.dataToPass || {};
  console.log('TRAIL DATA', trailData);

  const getData = async () => {
    try {
      await setTrailData(data);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const styles = StyleSheet.create({
    container: {flex: 1, marginBottom:10},
    reviewTitleRow: {
      backgroundColor: '#000000',
      paddingTop: 10,
      marginTop: 5,
    },
    reviewTitle: {
      fontFamily: 'OpenSans-BoldItalic',
      fontSize: 30,
      color: '#FFFFFF',
    },
    reviewImage: {height: 400, width: 600, resizeMode: 'cover'},
    reviewAuthor: {
      alignSelf: 'flex-end',
      fontFamily: 'OpenSans-Bold',
      fontSize: 18,
      color: '#000000',
      paddingHorizontal: 10,
    },
    reviewContent: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: '#000000',
      padding: 10,
    },
    message: {
      alignSelf: 'center',
      fontFamily: 'OpenSans-BoldItalic',
      color: '#000000',
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Text>right next to you</Text>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View>
            <View style={styles.reviewTitleRow}>
              <Text style={styles.reviewTitle}>
                {trailData?.title || 'Title'}
              </Text>
            </View>
            <Image
              style={styles.reviewImage}
              source={{uri: trailData.image}}
              alt="image"
            />
            <Text style={styles.reviewAuthor}>
              {trailData?.author || 'Author'}
            </Text>
            <Text style={styles.reviewContent}>
              {trailData?.review || 'Review'}
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

export default TrailDetail;
