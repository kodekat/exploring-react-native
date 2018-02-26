import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
const COMMUNITY_MEMBERS = [
  {
    name: 'Monte Thakkar',
    image: 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4',
    github_username: 'monte9'
  },
  {
    name: 'Ryan Liszewski',
    image: 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4',
    github_username: 'ryanliszewski'
  },
  {
    name: 'Thomas Zhu',
    image: 'http://thomaszhu.com/resources/thomas_avatar.jpeg',
    github_username: 'thomashzhu'
  },
  {
    name: 'Bhavesh Chowdhury',
    image: 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4',
    github_username: 'bhaveshc789'
  },
  {
    name: 'Sukhjit Singh',
    image: 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4',
    github_username: 'sukhjitsingh'
  },
  {
    name: 'Prakash Gurung',
    image: 'https://avatars.githubusercontent.com/makkhay',
    github_username: 'makkhay'
  },
  {
    name: 'Nicholas Szeto',
    image: 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4',
    github_username: 'niszeto'
  },
  {
    name: 'Emanuel Saunders',
    image: 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg',
    github_username: 'saundemanu'
  },
  {
    name: 'William Hua',
    image: 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4',
    github_username: 'william-hua'
  },
  {
    name: 'Mitul Savani',
    image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B',
    github_username: 'mitulsavani'
  },
  {
    name: 'Jakhongir Khusanov',
    image: 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4',
    github_username: 'jkhusanov'
  },
  {
    name: 'Teodora Caneva',
    image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A',
    github_username: 'kodekat'
  },
  {
    name: 'Affaan Ghazzali',
    image: 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4',
    github_username: 'affaanghazzali'
  },
  {
    name: 'Girish Rawat',
    image: 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4',
    github_username: 'GirishRawat'
  },
  {
    name: 'Karan Gupta',
    image: 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4',
    github_username: 'karanguptak9'
  }
]

export default class App extends React.Component {
  _onPress() {
    Alert.alert('Yay! This is a pop-up alert.');
  }
  render() {
    return (
      <ScrollView style={styles.scrollView}>
       <View style={styles.bigImageContainer}>
        <Image
        source={require('./Really_Big_Space.png')}
        style={styles.bigImage}
        />
       </View>
       <View style= {styles.twoImagesContainer}>
       <Image
        source={require('./Really_Big_Space.png')}
        style={styles.twoImages}
        />
        <Image
        source={require('./Really_Big_Space.png')}
        style={styles.twoImages}
        />
       </View>
      <View style={styles.container}>
        
          <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} 
          title="Click Here" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </View>
     </View>  
     <FlatList 
      style={styles.membersList}
      data={COMMUNITY_MEMBERS}
      renderItem= {({item, separator})=> (
        <View style={styles.itemContainer}>
        
          <View style={styles.imageNameContainer}>
            <Image 
              source={{uri: item.image}}
              style={{
                width:60,
                height:60
              }}
            />
            <Text> {item.name} </Text>
          </View>
          <View style={styles.gitHubName}>
          <Text> {item.github_username} </Text>
          </View>
        </View>

      )}
     />
     </ScrollView>
    
   
    );
  }
}

const styles = StyleSheet.create({
  
  scrollView:{
    flexGrow: 1,
    backgroundColor: 'red',
  },

  bigImageContainer:{
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  bigImage:{
    height: 300

  },
  twoImagesContainer:{
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 30,
    backgroundColor: 'teal'
  },
  twoImages:{
    height:100,
    width: 100,
    borderRadius:50

  },
  membersList:{
    flex:1,

  },
  itemContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageNameContainer:{
    flexDirection:'row'
  },
  
  gitHubName:{
    flex:1,
    alignItems:'flex-end'

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textbox: {
    fontSize: 30,
    color: '#ccff99'
  },
  buttonContainer:{
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    backgroundColor: '#2E9298',
    shadowOpacity: 0.25
  }
});
