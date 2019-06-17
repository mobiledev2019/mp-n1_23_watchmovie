import React, { Component } from 'react';
import { LoginManager } from 'react-native-fbsdk'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Montserrat_Bold, Montserrat_Medium, SF_UI_Text_Medium } from '../../ultils/string-fonts';
import { dangnhap } from "../../services";
class SignIn extends Component {//rnce
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            data:null,
            result: [],
        };
    }

    chuyenmanhinh(that) {
        that.props.navigation.navigate("Menu",  this.state.data )
    }
    async loginfacebook(that) {
        try {
            let result = await LoginManager.logInWithReadPermissions(['public_profile'])
            if (result.isCancelled) {
                alert('Đăng nhập không thành công');
            }
            else {
                this.chuyenmanhinh(that);
            }
        } catch (error) {
            alert('Đăng nhập Facebook lỗi: ' + error)
        }
    }

    dangnhap() {
        const { username, password } = this.state
        // if (this.state.kiemtra == 1)
            dangnhap(username, password, this.cbSuccess);

    }
    cbSuccess = data => {
        this.setState({
            data:data,
            result:data.result,
        });
        if(data.result==0){
            alert('Đăng nhập không thành công');
        }
        else if(data.result!=0){
            this.props.navigation.navigate("Menu", { data });
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login Movie</Text>
                <TextInput placeholder="Username"
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent"
                    style={styles.txtInput}
                    onChangeText={(username) => this.setState({ username: username })} />
                <TextInput placeholder="Password"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    style={styles.txtInput}
                    onChangeText={(password) => this.setState({ password: password })} />
                <TouchableOpacity
                    onPress={() => this.dangnhap()}
                    style={styles.btnLogin}>
                    <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.loginfacebook(this)}
                >
                    <Text style={styles.textStyle}>Đăng Nhập bằng Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 30,
        color: 'red'
    },
    txtInput: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        width: DEVICE_WIDTH - 40,

        marginHorizontal: 20,
        padding: 8,
        borderRadius: 20,
        color: '#000',
        marginTop: 2
    },
    btnLogin: {
        width: DEVICE_WIDTH - 40,
        backgroundColor: 'rgba(0,145,234,1)',
        padding: 8,
        borderRadius: 20,
        marginTop: 2

    },
    txtLogin: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonStyle: {
        alignItems: 'center',
        height: 20,
        backgroundColor: '#141E39',
        borderRadius: 5,
        paddingBottom: 50,
        paddingHorizontal: 15,
    },
    textStyle: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: Montserrat_Medium,
        color: '#FFFFFFFF',
        alignItems: 'center',
    },

});
