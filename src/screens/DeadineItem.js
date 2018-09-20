import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class C4_List extends Component {
  static defaultProps ={
    deadlines: {
      title: '마감일 종류',
      endDate: '종료일',
      memo: '내용',
      a_date: 1,
      id: 0

    }
  }
  state={
    title: '',
    endDate: '',
    memo: '',
    a_date: 0 ,
    editing: flase,

  }

  render() {
    return (
      <View style={styles.deadlineBox}>
        <View >
          <Text>hello</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  deadlineBox: {
    height: 40,
    padding: 5,


  },
});