import React from 'react'
import {View, StyleSheet, ScrollView, Text } from "react-native"
const About = (props) => {
    const intro = `Whether attacking the mountain that is the top of your bucket list, or attacking a challenging climbing wall, we have you covered. We constantly upgrade our stock with the newest and best gear. We Pride ourselves on stocking the best and the safest gear. And of course prices are great!`
 const bio = `CarvedRock started for purely selfish regions. Our founder, John Doe, was an adventurer from the start. Between rafting on the Amazon and climbing Everest he tries to do it all. Expreriences were important. Over time he learned finding the best gear was a job of its own. Boots from their store, tents and climbing supplies from another. John wished there was a one stop shop for this. Since he couldn't find what he wanted, then CarvedRock was born`
 const stores = `stores rtoasdaj asdasjduias asndjas baskdbjasjdabdasdkbsa asjkdnjasjdkandkjnajskddjas`   
 const styles = StyleSheet.create({
    container:{},
    imageStyle:{},
    aboutTitle:{},
    aboutText:{}
    })
 return (
    <View style={styles.container}>
<ScrollView>
<Header/>
<Image source={require("../assets/images/panoramic.jpg")}
style={styles.imagestyle}
/>
<Text style={styles.aboutTitle}>
We Love New Adventure
</Text>
<Text style={styles.aboutText}>
{intro}
</Text>
<Image source={require("../assets/images/canoeing.jpg")}
style={styles.imagestyle}
/>
<Text style={styles.aboutTitle}>
How We Started
</Text>
<Text style={styles.aboutText}>
{bio}
</Text>
<Image source={require("../assets/images/forest.jpg")}
style={styles.imagestyle}
/>
<Text style={styles.aboutTitle}>
Where Can You Find Us
</Text>
<Text style={styles.aboutText}>
{stores}
</Text>
</ScrollView>
    </View>
  )
}



export default About