import React from 'react';
import { Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  ScrollView, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flexDirection: "row", paddingBottom: 25}}>
      <TouchableHighlight
          style={styles.profileImgContainer}
        >
    <Image source={require('./assets/abdullah.jpg')} style={styles.profileImg} />
</TouchableHighlight>
<View style={{flexDirection: "column"}}>
<Text style={styles.titletext}>Abdullah Sajjad</Text>
<Text style={{paddingLeft: 10, fontSize: 18, color: "gray"}}>IT Engineer</Text>
</View>

      </View>
      <View style={{
            borderBottomColor: '#e1e4e8',
            borderBottomWidth: 2,
            width: '40%',
            marginHorizontal: '30%',
            paddingTop: 10,}} />
{/* social section */}
<View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/mail.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('mailto:aminhas1996@gmail.com')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>aminhas1996@gmail.com</Text>
    </TouchableOpacity>
  </View>
  <View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/cell.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('tel:03008743033')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>03008743033</Text>
    </TouchableOpacity>
  </View>
  <View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/location.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/JkHZDbLjCfFj9yf9A')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>Gujranwala, Pakistan</Text>
    </TouchableOpacity>
  </View>
  <View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/web.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('https://abdullahminhas.github.io/')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>abdullahminhas.github.io</Text>
    </TouchableOpacity>
  </View>
  <View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/github.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/abdullahminhas')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>abdullahminhas</Text>
    </TouchableOpacity>
  </View>
  <View style={{paddingTop: 10, paddingLeft: 15, flexDirection: "row"}}>
    <Image source={require('./assets/linkedin.png')} style={styles.logo} />
    <TouchableOpacity onPress={() => Linking.openURL('linkedin.com/in/abdullah-minhas-041497175')}>
    <Text style={{paddingLeft: 10, paddingTop: 0, fontSize: 15, color: '#586069'}}>Abdullah Minhas</Text>
    </TouchableOpacity>
  </View>
  <View
  style={{
    borderBottomColor: '#e1e4e8',
    borderBottomWidth: 2,
    width: "90%",
    marginHorizontal: '5%',
    paddingTop: 13,
  }}
/>
{/* social section ended */}
  <View style={{padding: 15}}>
    <Text style={styles.about}>About Me</Text>
    <Text style={{textAlign: "justify", color: '#586069', fontSize: 12}}>I'm a IT engineer with lifelong learning interests. My specialties include quickly learning new skills and programming languages, showing extreme perseverance in problem solving, getting the job done within constraints and getting along with people while doing so. So far I've worked in the C++ and Python ecosystem. I would consider myself battle hardened after working with complex systems and complex problems that would stay with me for days. So, I can safely say that I can "live with problems" without burning out until they get resolved. It resonates with my core belief in "You can't defeat a person who never gives up".</Text>
  </View>
  <View style={{padding: 15}}>
  <Text style={styles.about}>Education</Text>
  {/* university */}
  <View style={{paddingVertical: 4}}>
  <Text style={{fontWeight: "bold", fontSize: 18, paddingTop: 6}}>Bachelor of Science (IT)-(2016-2020)</Text>
  <Text style={{color: "gray", fontSize: 15}}>Bahria University, Islamabad.</Text>
  </View>
  <View style={{paddingVertical: 4}}>
  <Text style={{fontWeight: "bold", fontSize: 18}}>Diploma Object Oriented Programming - OOP</Text>
  <Text style={{color: "gray", fontSize: 15}}>Soft Solution College, Gujranwala.</Text>
  </View>
  <View style={{paddingVertical: 4}}>
  <Text style={{fontWeight: "bold", fontSize: 18}}>Intermediate (Pre-Engineering)-(2013-2015)</Text>
  <Text style={{color: "gray", fontSize: 15}}>Punjab College of Science, Gujranwala.</Text>
  </View>
  <View style={{paddingTop: 4}}>
  <Text style={{fontWeight: "bold", fontSize: 18}}>Matriculation (Science)-(2011-2013)</Text>
  <Text style={{color: "gray", fontSize: 15}}>Allied School, Satellite town Campus Gujranwala.</Text>
  </View>
  </View>
  {/* Experience */}
  <View style={{padding: 15}}>
    <Text style={styles.about}>Experience</Text>
    <Text style={{textAlign: "justify", color: '#586069', fontSize: 12}}> - Currently Working at BuzzWare Tech as Front End Web Developer.</Text>
    <Text style={{textAlign: "justify", color: '#586069', fontSize: 12}}> - After my grdaution I started working in Al Qaim as an IT Engineer. There I developed website, mailers and posters. Currently I am working as web developer at buzzware tech.</Text>
  </View>
  {/* card */}
  <View style={{padding: 10}}>
    {/* color: "black", fontSize: 24, fontWeight: '400' */}
  <Text style={styles.about}>Projects</Text> 
  </View>
  <View style={styles.card}>
    <View style={{padding: 15, paddingRight: 27}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/abdullahminhas/Cricket-Squad-Selector')}>
      <Text style={{fontSize: 18, fontWeight: "700", color: "#0366D6"}}>Cricket-Squad-Selector</Text>
    </TouchableOpacity>
      <Text style={{fontSize: 12, textAlign: "justify", color: "black", paddingTop: 10, color: '#586069'}}>In this project, I have used python flask and machine learning to select a squad against a particular team.</Text>
      <View style={{flexDirection: "row", marginTop: 28}}>
      <View style={styles.circlePy} />
      <Text style={{paddingLeft: 4, color: '#586069'}}>Python</Text>
      </View>
    </View>
  </View>


  <View style={styles.card}>
    <View style={{padding: 15, paddingRight: 27}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/abdullahminhas/Student-Information-System')}>
      <Text style={{fontSize: 18, fontWeight: "700", color: "#0366D6"}}>Student-Information-System</Text>
    </TouchableOpacity>
      <Text style={{fontSize: 12, textAlign: "justify", color: "black", paddingTop: 10, color: '#586069'}}>This project is coded in C++ and made for students who want to learn more about C++. concepts include OOP, operator overloading and file handling</Text>
      <View style={{flexDirection: "row", marginTop: 28}}>
      <View style={styles.circleC} />
      <Text style={{paddingLeft: 4, color: '#586069'}}>C++</Text>
      </View>
    </View>
  </View>

  
  <View style={styles.card}>
    <View style={{padding: 15, paddingRight: 27}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/abdullahminhas/abdullahminhas.github.io')}>
      <Text style={{fontSize: 18, fontWeight: "700", color: "#0366D6"}}>abdullahminhas.github.io</Text>
    </TouchableOpacity>
      <Text style={{fontSize: 12, textAlign: "justify", color: "black", paddingTop: 10, color: '#586069'}}>abdullahminhas.github.io</Text>
      <View style={{flexDirection: "row", marginTop: 28}}>
      <View style={styles.circleHTML} />
      <Text style={{paddingLeft: 4, color: '#586069'}}>HTML</Text>
      </View>
    </View>
  </View>


  </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circlePy: {
    marginTop: 2,
    height: 13,
    width: 13,
    backgroundColor: "#3572a5",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  circleC: {
    marginTop: 2,
    height: 13,
    width: 13,
    backgroundColor: "#F34B7D",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  circleHTML: {
    marginTop: 2,
    height: 13,
    width: 13,
    backgroundColor: "#E34C26",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  card: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: '#e1e4e8',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10, 
    borderRadius: 0, 
    shadowColor: "black",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  // profileImgContainer: {
  //   marginTop: 10,
  //   marginLeft: 10,
  //   height: 100,
  //   width: 100,
  //   borderRadius: 50,
  //   borderColor: 'green',
  //   borderWidth:5,
  // },
  about: {
    fontSize: 32,
    fontWeight: "bold",
  },
  logo: {
    width: 17,
    height: 17,
  },
  profileImg: {
    marginTop: 10,
    marginLeft: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  titletext: {
    paddingTop: 15,
    paddingLeft: 10,
    fontSize: 32,
    fontWeight: "bold",
  },
});
