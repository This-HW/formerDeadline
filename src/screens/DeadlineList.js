import React, {Component} from 'react';
import { StyleSheet,FlatList, Text, View} from 'react-native';
//import DeadlineItem from './DeadineItem';

export default class DeadlineList extends Component {
  constructor(props){
    super(props)
    this.state ={
      deadlineList: [],

    }

    this.select = this.select.bind(this);
  }

  _renderRow = ({item}) => {
    return <View style={{height: 80 , borderWidth:1}}><Text>{item.title}</Text></View>;
  }

  _keyExtractor = (item,index) => item.index;

  select(){
    this.setState({
      text:"123"
    })
  }

  componentDidMount(){
    this.setState({
      data: [
        {title : '첫번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
        {title : '두번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
        {title : '세번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
        // {title : '네번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
        // {title : '자섯번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
        // {title : '여섯번째 리스트', endDate: "2018-09-18", memo:"세부사항", a_date:1 },
      ]
    })
  }

  render() {

    return (
      
     
     <View className="deadline-list-template" style={[ styles.container]}>
        <View style={[ styles.date_time_wrapper]}>
          <Text>날짜</Text>
        </View>
        <View style={[ styles.alarm_wrapper]}>
          <Text>알람</Text>
        </View>
        <View style={[ styles.deadline_list_wrapper]}>
          <Text>데드라인 리스트</Text>
          <FlatList 
          style={{flex: 1, backgroundColor: "lightblue"}}
          keyExtractor={this._keyExtractor}
          data = {this.state.data}
          renderItem = {this._renderRow}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create ({
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
