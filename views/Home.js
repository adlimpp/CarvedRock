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
import {useNavigation} from '@react-navigation/native';
import Shops from '../components/Shops';

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('What can we help you find?');
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
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
            source={require('../assets/images/trail-image.jpg')}
          />
          <Text style={styles.trailReviewPark1}>ASHPALT</Text>
          <Text style={styles.trailReviewPark2}>NATIONAL PARK</Text>
          <TouchableOpacity
            style={styles.trailButton}
            onPress={() => navigation.navigate('Trail')}>
            <Text style={styles.trailButtonText}>SEE REVIEW</Text>
          </TouchableOpacity>
        </View>
        <Shops
          imageSrc={'https://i.imgur.com/M2nMlMw.jpg'}
          title="TOP TIER GEAR"
          description="BROWSE ALL GEAR"
          target="Store"
        />
        <Shops
          imageSrc={'https://i.imgur.com/GvAlRYf.jpg'}
          title="HAPPY FEET"
          description="BROWSE BOOTS"
          target="BootShop"
        />
        <Shops
          imageSrc={'https://i.imgur.com/dWRyUvS.jpg'}
          title="MEET AT THE TOP"
          description="BROWSE CLIMBING GEAR"
          target="ClimbingShop"
        />
        <Shops
          imageSrc={'https://i.imgur.com/9gd1dpm.jpg'}
          title="MAKE A SPLASH"
          description="BROWSE KAYAKS"
          target="KayakShop"
        />
        <Footer />
      </ScrollView>
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
    textAlign: 'center',
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 30,
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
  adTitle2: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
    color: '#8B8B8B',
  },
  adText2: {
    textAlign: 'center',
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 15,
    color: 'FC8A49',
  },
  adContent2: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    color: '#000000',
    paddingBottom: 20,
  },
  trailReview: {
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingBottom: 30,
  },
  trailReviewTitle: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 30,
    color: '#FFFFFF',
  },
  trailImage: {
    height: 220,
    width: '100%',
  },
  trailReviewPark1: {fontFamily: 'OpenSans-Bold', fontSize: 45, width: '100%'},
  trailReviewPark2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  trailButton: {
    width: '50%',
    backgroundColor: '#FC8A49',
    alignItems: 'center',
    borderRadius: 5,
  },
  trailButtonText: {
    fontSize: 25,
    color: '#FFFFFF',
  },
});

export default Home;
