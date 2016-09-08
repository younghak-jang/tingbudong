'use strict';

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';


var styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputbox: {
        height: 30, 
        width: 200,
        borderColor: 'gray',
        borderWidth: 0.5,
        fontSize: 14,
        padding: 3
    }
});

// 첫 로그인 화면
export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            passwd: ''
        };
    }
    
    _handlePress() {
        console.log('Pressed!');
    }
    
    render() {
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{padding: 10}}>
                    <Image source={require('./tbd.v1.png')} 
                        style={{width: 50, height: 50}}
                    />
                </View>
                <View style={{height: 100}} />
                <View style={{height: 50}}>
                    <Text style={styles.text}>
                        뭐라고
                        <Text style={{color: 'red'}}>
                            ? 
                        </Text> 
                        팅부동!
                    </Text>
                </View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="핸드폰번호(중국, '-' 없이 입력)"
                        onSubmitEditing={(phonenumber) => this.setState({phonenumber})}
                    />
                </View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="비밀번호"
                        onSubmitEditing={(passwd) => this.setState({passwd})}
                    />
                </View>
                <View style={{padding: 10}}>
                    <Button
                        style={{fontSize: 14, color: 'green'}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this._handlePress()}>
                        로그인
                    </Button>
                </View>
            </View>
        );
    }
}