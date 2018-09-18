import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList, Text, View, Image, TouchableOpacity} from 'react-native';


export default class C4_List extends Component {
  constructor(props){
    super(props)
    this.state ={
      text: "",
      data: []
    }

    this.select = this.select.bind(this);
  }

  _renderRow = ({item}) => {
    return <View style={{height: 150 , borderWidth:1}}><Text>{item.title}</Text></View>;
  }

  _keyExtractor = (item,index) => item.id;

  select(){
    this.setState({
      text:"123"
    })
  }

  componentDidMount(){
    this.setState({
      data: [
        {title : '첫번째 리스트', id: "0"},
        {title : '두번째 리스트', id: "1"},
        {title : '세번째 리스트', id: "2"},
        {title : '네번째 리스트', id: "3"},
        {title : '자섯번째 리스트', id: "4"},
        {title : '여섯번째 리스트', id: "5"}
      ]
    })
  }

  render() {

    return (
      
     
     <View className="deadline-list-template" style={[C4_List_styles.container]}>
        <View style={[C4_List_styles.date_time_wrapper]}>
          <Text>날짜</Text>
        </View>
        <View style={[C4_List_styles.alarm_wrapper]}>
          <Text>알람</Text>
        </View>
        <View style={[C4_List_styles.deadline_list_wrapper]}>
          <Text>데드라인 리스트</Text>
          <FlatList 
          style={{flex: 1, backgroundColor: "red"}}
          keyExtractor={this._keyExtractor}
          data = {this.state.data}
          renderItem = {this._renderRow}
          />
        </View>

      </View>

    );
  }
}

const C4_List_styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  date_wrapper : {
    flex: 0.1,
    paddingLeft: 20,
    justifyContent : 'center',

    borderStyle: "solid",
    borderWidth: 1.3,
    borderColor: "black",
  },

  alarm_wrapper : {
    flex: 0.05,
    paddingLeft: 20,
    justifyContent : 'center',

    borderStyle: "solid",
    borderWidth: 1.3,
    borderColor: "black",
  },

  deadline_list_wrapper : {
    flex: 0.85,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: "yellow",
    alignItems: "stretch",


    borderStyle: "solid",
    borderWidth: 1.3,
    borderColor: "black",
  }

});
