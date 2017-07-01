
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  ScrollView,
  ListView,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

export default class Main extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows([
            '阿米巴经营', 
            'SCRUM敏捷项目管理', 
            '重新定义公司', 
            '人月神话', 
            '时间管理-如何充分利用你的24小时',
            '时间简史',
            '自控力',
            '运营前线1',
            '运营前线2',
            '畅销的原理',
            '代码整洁之道',
            '软技能 代码之外的生存指南',
            'Elasticsearch 服务器开发',
            '程序员修炼之道-从小工到专家',
            '第一本Docker书',
            '程序员的数学思维修炼（趣味解读）',
            'Unity 3D游戏开发',
            '深入浅出iPhone开发',
            'Ruby原理剖析',
            'iPhone开发实战'
            ]),
    };
    }
  render() {
    return (
      <ScrollableTabView
        style={{marginBottom: 0, }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <View tabLabel='全部'>
           <ScrollView contentContainerStyle={styles.contentContainer}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
                />
            </ScrollView>
        </View>
        <View tabLabel='已借阅'>
<ScrollView contentContainerStyle={styles.contentContainer}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
                />
            </ScrollView>
        </View>
        <View tabLabel='借阅记录'>
<ScrollView contentContainerStyle={styles.contentContainer}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
                />
            </ScrollView>
        </View>
        <View tabLabel='收藏'>
<ScrollView contentContainerStyle={styles.contentContainer}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
                />
            </ScrollView>
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 0
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor:'#ddd',
        height: 50,
        lineHeight: 40,
        marginLeft:15,
        marginRight:15
    }
  
});

