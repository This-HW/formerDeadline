
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Image,} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class intro extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <View style={{flex:285}}>
//             <View style={{flex:83,  justifyContent:'flex-end', alignItems:'center'}}>
//               <View style={{flex: 52.5}}></View>
//               <View style={{flex: 18.5, flexDirection:'row'}}>
//                 <View style={{flex: 44}}></View>
//                 <View style={{flex: 92.5}}>
//                   <Image source={require('./img/logo_deadline_copy.png')} style={{resizeMode: 'contain'}}/>
//                 </View>
//                 <View style={{flex: 44}}></View>
//                 </View>
//               <View style={{flex: 12}}></View>
//             </View>
//             <View style={{ flexDirection:'row', flex:80}} >
//                 <View style={{flex: 11.5}}></View>
//                 <View style={styles.rectangle1} >
//                   <Image source={require("./img/red_plus.png")} style={{marginTop:35, flex:0.3, resizeMode: 'contain', margin:20}} />
//                   <Text style={styles.textBox1}>데드라인 등록하기</Text>
//                   <Text style={styles.textBox2}>브랜드별로 쉽게 찾고 한번에 등록하세요</Text>
//                 </View>
//                 <View style={{flex: 11.5}}></View>
//             </View>
//             <View style={{flex:120, flexDirection:'column', justifyContent:'flex-end'}}>
//               <View style={{flex:95, flexDirection:'row'}}>
//                   <View style={{flex:43.5}}></View>
//                   <View style={{flex:93, flexDirection:'column', alignItems:'stretch'}}>
//                     <View style={{flex:19.5}}></View>
//                     <View style={styles.buttonDesign}>
//                       <Text style={{fontFamily: "SpoqaHanSansJP",  fontSize: 13, fontWeight: "bold",  color: "#ff726c"}}>데드라인 사용방법</Text>
//                     </View>
//                     <View style={{flex:10.5}}></View>
//                     <View style={styles.buttonDesign}>
//                       <Text style={{fontFamily: "SpoqaHanSansJP",  fontSize: 13, fontWeight: "bold",  color: "#ff726c"}}>친구도 챙겨주기</Text>
//                   </View>
//                     <View style={{flex:29}}></View>  
//                   </View>
//                   <View style={{flex:43.5}}></View>
//                 </View>
//               <View style={{flex: 25, flexDirection:'row', alignItems:'stretch'}}>
//                 <View style={{flex: 11.5 }}></View>
//                   <View style={styles.rectangle2}>
//                    <Text style={styles.textBox3} >조예림님의 데드라인</Text>
//                   </View>
//                 <View style={{flex: 11.5}}></View>
//               </View>
//             </View>
//          </View>
//          <View style={{flex: 27, borderTopWidth:0.7, borderColor:'rgba(230, 230, 230, 2)' ,  backgroundColor: "rgba(230, 230, 230, 0.5)" , flexDirection:'row'}}>
//             <View style={{flex:1, justifyContent:'center',alignItems: "center"}}>
//               <Image source={require('./img/deadline_r.png')} style={{resizeMode: 'contain',flex:0.45}} />
//             </View >
//             <View style={{flex:1, justifyContent:'center',alignItems: "center"}}>
//               <Image source={require('./img/registration_b.png')} style={{resizeMode: 'contain',flex:0.5}}/>
//             </View>
//             <View style={{flex:1, justifyContent:'center',alignItems: "center"}}>
//               <Image source={require('./img/notice_b.png')} style={{resizeMode: 'contain',flex:0.5}}/>
//             </View >
//             <View style={{flex:1, justifyContent:'center',alignItems: "center"}}>
//               <Image source={require('./img/menu_b.png')} style={{resizeMode: 'contain',flex:0.45}}/>
//             </View>
//          </View>
//      </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//     flexDirection:'column'
//   },
//   rectangle1 : {
//     flex : 157,
//     alignItems: 'center',
//     justifyContent: "center",
//     borderRadius: 1.5,
//     backgroundColor: "rgba(230, 230, 230, 0.2)",
//     alignSelf: "stretch",
//     shadowColor: "#d0d0d0",
//     shadowOffset: {
//       width: 1,
//       height: 1
//     },
//     shadowRadius: 2,
//     shadowOpacity: 1
//   },
//   textBox1: {
//     width: 122,
//     height: 22,
//     fontFamily: "SpoqaHanSansJP",
//     fontSize: 16,
//     fontWeight: "bold",
//     fontStyle: "normal",
//     lineHeight: 22,
//     letterSpacing: 0,
//     textAlign: "center",
//     alignItems: "center",
//     color: "#4a4a4a"
//   },
//   textBox2 : {
//     width: 250,
//     height: 22,
//     fontFamily: "SpoqaHanSansJP",
//     fontSize: 13,
//     lineHeight: 22,
//     letterSpacing: 0,
//     textAlign: "center",
//     color: "#7b7b7b"
//   },
//   rectangle2 : {
//     flex:157,
//     borderRadius: 10,
//     backgroundColor: "#ff726c",
//     alignItems: "flex-start",
//     justifyContent:"center",
//     paddingLeft: 20
//   },
//   textBox3: {
//      fontFamily: "SpoqaHanSansJP",
//      fontSize: 15,
//      letterSpacing: -0.66,
//      color: 'white'
//      },
//   buttonDesign:{
//     flex: 15,
//     borderRadius: 25,
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#ff726c",
//     justifyContent:'center',
//     alignItems:'center'
//   }
// });


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class mainView extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{flex: 0.3 , alignItems: "center", justifyContent: "center"}}>
            <Image source={require('./img/logo_deadline_copy.png')} style={{resizeMode: 'contain' , width: 190, marginTop: 85}}/>
          </View>
          <View style={{flex: 0.3 , alignItems: "center", justifyContent: "center"}}>
            <TouchableOpacity style={styles.button1}>
              <Image source={require('./img/red_plus.png')} style={{ resizeMode: 'cover', maxHeight:40 , maxWidth: 40, marginBottom:16}}/>
              <Text style={{fontFamily:"SpoqaHanSansJP", letterSpacing: 0, fontStyle: "normal", fontWeight: "bold", fontSize: 17}}>데드라인 등록하기</Text>
              <Text style={{fontFamily:"SpoqaHanSansJP", letterSpacing: 0, fontStyle: "normal", fontWeight: "bold", fontSize: 14}}>브랜드별로 쉽게 찾고 한번에 등록하세요</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.4 , alignItems: "center", marginTop:20}}>
            <TouchableOpacity style={styles.button2}>
                <Image source={require('./img/question_mark_icon.png')} style={{resizeMode: 'contain', width: 19}}/>
                <Text style={styles.buttonText1}>데드라인 사용방법</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Image source={require('./img/small_smile.png')} style={{ resizeMode:'contain', width: 19}}/>
              <Text style={styles.buttonText1}>친구도 챙겨주기</Text>
            </TouchableOpacity>
          </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'column'
  },
  button1:{
    width: 300 ,
    height: 165,
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 0,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#d0d0d0",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  button2:{
    width: 220 ,
    height: 40,
    marginTop: 20,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 1.3,
    borderColor: "#ff726c",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  buttonText1 : {
    fontFamily: "SpoqaHanSansJP",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: "#ff726c",
    marginLeft: 6
  }
});

