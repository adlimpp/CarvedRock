import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
const careerData = [
  {
    jobTitle: `Fullstack Developer`,
    duties: `Work as a team to build and maintain applications`,
    qualification: `Proficient in using ReactJS, React Native, and ExpressJs`,
    wage: `$20 per hour`,
  },
  {
    jobTitle: `Mid Backend Developer`,
    duties: `Work as a team to build and maintain applications`,
    qualification: `Proficient in using ExpressJs`,
    wage: `$15 per hour`,
  },
  {
    jobTitle: `Junior Frontend Developer`,
    duties: `Work as a team to build and maintain applications`,
    qualification: `Proficient in using ReactJS and React Native`,
    wage: `$10 per hour`,
  },
];

const styles = StyleSheet.create({
  container: {flex: 1},
  imageStyle: {height: 200, width: '100%', marginBottom: 20},
  jobContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#000000',
    paddingLeft: 20,
  },
  subTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#000000',
    paddingLeft: 20,
    textDecorationLine: 'underline',
  },
  content: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#000000',
    paddingLeft: 20,
  },
  applyButton: {
    width: '50%',
    backgroundColor: '#000000',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  applyButtonText: {fontSize: 25, color: '#ffffff'},
  backButton: {
    width: '80%',
    backgroundColor: '#F12748',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 15,
  },
  backButtonText: {fontSize: 30, color: '#FFFFFF'},
});
const Careers = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/lumberjack.jpg')}
        />
        {careerData.map((x, y) => (
          <View key={y} style={styles.jobContainer}>
            <Text style={styles.title}>{x.jobTitle}</Text>
            <Text style={styles.subTitle}>Duties: </Text>
            <Text style={styles.content}>{x.duties}</Text>
            <Text style={styles.subTitle}>Qualifications: </Text>
            <Text style={styles.content}>{x.qualification}</Text>
            <Text style={styles.subTitle}>Starting Wage: </Text>
            <Text style={styles.content}>{x.qualification}</Text>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>GO BACK</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Careers;
