import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro';
import { Alert, AsyncStorage, Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { setViewedIntro } from './../actions/account.action'
var { height, width } = Dimensions.get('window')
@connect((store) => {
    return {

    }
})

class AppIntroScreen extends Component {
    static navigationOptions = {
        headerMode: 'none',
    };
    onSkipBtnHandle = (index) => {
        const { navigate } = this.props.navigation;
        navigate("Account")
    }
    doneBtnHandle = () => {
        const { navigate } = this.props.navigation;
        navigate("Account")
    }
    nextBtnHandle = (index) => {
        // Alert.alert('Next');
        // console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }
    render() {
        const pageArray = [{
            // title: 'Step1',
            // description: 'Description 1',
            img: require("./../src/images/intro1.png"),
            imgStyle: {
                height: 93 * 2.5,
                width: width
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Step 2',
            description: 'Description 2',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];
        return (
            <AppIntro
                dotColor={"white"}
                activeDotColor={"grey"}
                leftTextColor={"grey"}
                rightTextColor={'grey'}
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
            >
                <View style={[styles.slide,]}>
                    <Image style={{ width: width, height: height }} source={require("./../src/images/intro1.png")} />
                </View>
                <View style={[styles.slide]}>
                    <Image style={{ width: width, height: height }} source={require("./../src/images/2.png")} />
                </View>
            </AppIntro>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#9DD6EB',
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default AppIntroScreen;