
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

