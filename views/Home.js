import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [searchText, setSearchText] = useState('What can we help you find?');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            onChange={e => setSearchText(e)}
            value={searchText}
          />
        </View>
        <View>
          <Image
            style={styles.adImage1}
            source={require('../assets/images/ad1.jpg')}
          />
          <View style={styles.ad1}>
            <Text style={styles.adTitle1}>GET A GRIP</Text>
            <Text style={styles.adText1}>20% OFF</Text>
            <Text style={styles.adContent1}>THROUGH OUT THE SEASON</Text>
          </View>
        </View>
        <View style={styles.adImage2Row}>
          <Image
            style={styles.adImage2}
            source={require('../assets/images/ad2-1.jpg')}
          />
          <Image
            style={styles.adImage2}
            source={require('../assets/images/ad2-2.jpg')}
          />
        </View>
        <View>
          <Text style={styles.adTitle2}>COUPLES RETREAT WEEKEND</Text>
          <Text style={styles.adText2}>SAVE AN EXTRA 20%</Text>
          <Text style={styles.adContent2}>WHEN YOU BUY TWO PAIRS OF BOOTS</Text>
        </View>
        <View style={styles.trailReview}>
          <Text style={styles.trailReviewTitle}>TRAIL REVIEW</Text>
          <Image
            style={styles.trailImage}
            source={require('../assets/images/trail-image.png')}
          />
          <Text style={styles.trailReviewPark1}>ASHPALT</Text>
          <Text style={styles.trailReviewPark2}>NATIONAL PARK</Text>
          <TouchableOpacity style={styles.trailButton}>
            <Text style={styles.trailButtonText}>SEE REVIEW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  searchRow: {backgroundColor: '#686868', height: 60},
  searchInput: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 350,
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans-LightItalic',
  },
  adImage1: {height: 180, width: 450},
  ad1: {backgroundColor: '#FC8A49'},
  adTitle1: {
    textAlign: 'center',
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 30,
  },
  adText1: {
    ...styles.adTitle1,
    color: '#FFFFFF',
  },
  adContent1: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    color: '#FFFFFF',
    paddingBottom: 20,
  },
  adImage2Row: {flexDirection: 'row'},
  adImage2: {height: 180, width: '50%', resizeMode: 'contain'},
  adTitle2: {},
  adText2: {},
  adContent2: {},
  trailReview: {},
  trailReviewTitle: {},
  trailImage: {},
  trailReviewPark1: {},
  trailReviewPark2: {},
  trailButton: {},
  trailButtonText: {},
});

export default Home;
