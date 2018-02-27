import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, 
  Image, FlatList, TextInput, Keyboard } from 'react-native';

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
  constructor(props){
    super(props);

    this.state = {
      backgroundColor: '#3A0088',
    }
  }
 
  /*change background color to random every click*/
  handleClick = () => {
    //Generate Random Color
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    //Changes state of background color
    this.setState({
      backgroundColor: randomColor
    })
  }
  /*magic word handle submitted text*/
  handleSubmit = () => {
    const {phrase}  = this.state
    
    if (phrase === 'Space' || phrase === 'Galaxy') {
      Keyboard.dismiss 
      console.log("Correct Phrase Entered")
      Alert.alert(
        'Success!', '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')},],
        { cancelable: false }
      )
    } else {
      Keyboard.dismiss
      TextInput.clear
      console.log("Incorrect Phrase Entered")
      Alert.alert(
        'Invalid Input!', '',
        [ {text: 'Try Again', onPress: () => console.log('Try Again Pressed')},
       ],
        { cancelable: false }
      )
    }

  } 
  render() {
    return (
      <ScrollView style={styles.scrollView}>
       <View style={styles.bigImageContainer}>
        <Image
        source={require('./OuterSpace.png')}
        style={styles.bigImage}
        />
       </View>
       <View style= {styles.twoImagesContainer}>
       <Image
        source={require('./galaxy.jpeg')}
        style={styles.twoImages}
        />
        <Image
        source={require('./galaxy.jpeg')}
        style={styles.twoImages}
        />
       </View>
      <View style={styles.toggleContainer} 
      backgroundColor={this.state.backgroundColor}>
          <View style={styles.buttonContainer}>
          <Button onPress={this.handleClick}
          title="Change Background Color" color="#ffffff" />
          </View>
     </View>  
     <View style={styles.phraseContainer} >
        <TextInput
            style={styles.phraseInput}
            value={this.state.phrase}
            placeholder="Enter the Magic Word"
            placeholderTextColor="white"
            selectionColor="white"
            onChangeText={(text) => this.setState({phrase: text})}
            onSubmitEditing={this.handleSubmit.bind(this)}
            />
     </View>
     <FlatList 
      style={styles.membersList}
      data={COMMUNITY_MEMBERS}
      renderItem= {({item, separator})=> (
        <View style={styles.memberContainer}>
          <View style={styles.imageNameContainer}>
            <Image 
              source={{uri: item.image}}
              style={{
                width:70,
                height:70
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
 /*scroll style*/ 
  scrollView:{ 
    flexGrow: 1,
    backgroundColor: '#3A0088',
  },

  bigImageContainer:{
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bigImage:{
    height:250,
    width: 380
  },
  twoImagesContainer:{
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#400080'
  },
  twoImages:{
    height:100,
    width: 100,
    borderRadius:50
  },
  /*list at the bottom*/
  membersList:{
    flex: 1,
    backgroundColor: '#cccccc',
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  memberContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageNameContainer:{
    flexDirection:'row',
    alignItems: 'center'
  },
  gitHubName:{
    flex:1,
    alignItems:'flex-end'

  },
  /*change button color*/
  toggleContainer: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    backgroundColor: '#00B7C2',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,   
  },
  /*magic phrase*/
  phraseContainer: {
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  phraseInput: {
    fontSize: 20,
    marginLeft:55,
    marginRight:55,
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    backgroundColor: '#00B7C2',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    alignContent: 'center'
   
  },
});
