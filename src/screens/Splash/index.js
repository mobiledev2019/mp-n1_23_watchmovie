import React, { Component } from 'react';
import { LoginManager } from 'react-native-fbsdk'
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import background from '../../assets/background.png';
import { Montserrat_Bold, Montserrat_Medium, SF_UI_Text_Medium } from '../../ultils/string-fonts';
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Menu")
        }, 5000);
    }
    chuyenmanhinh(that) {
        that.props.navigation.navigate("TopMovie")
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

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <LinearGradient
                    // colors={['#0047B9', '#141E39']}
                    colors={['#505FD2', '#9537BC', '#D42E76', '#F87E2F', '#FDD97C']}
                    style={styles.linearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                >
                    <ImageBackground
                        source={background}
                        style={styles.imageBackground}
                    >


                    </ImageBackground>
                    <Text style={styles.text1}
                    >HTT</Text>
                    <Text style={styles.text2}>TEAM</Text>

                    <Text style={styles.text3}>An aplication Movies watch film</Text>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => this.loginfacebook(this) }
                    >
                        <Text style={styles.textStyle}>Đăng Nhập bằng Facebook</Text>
                    </TouchableOpacity>
                    
                   
                    
                </LinearGradient>
            </View>
        );
    }
}

export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        opacity: 0.2
    },
    text1: {
        color: "#F9D513",
        fontSize: 50,
        position: "absolute",
        alignSelf: 'center',
        top: 150,
        fontFamily: Montserrat_Bold,
    },
    text2: {
        fontSize: 25,
        fontFamily: Montserrat_Medium,
        color: '#FFFFFF',
        position: "absolute",
        alignSelf: 'center',
        top: 210,
    },
    text3: {
        fontSize: 14,
        fontFamily: SF_UI_Text_Medium,
        color: 'rgba(255,255,255,0.5)',
        position: "absolute",
        alignSelf: 'center',
        bottom: 50,
    },
    textStyle:{
        marginTop: 10,
        fontSize: 20,
        fontFamily: Montserrat_Medium,
        color: '#FFFFFFFF',
        alignItems: 'center',
    },
    buttonStyle: {
        
        alignItems: 'center',
        height: 20,
        backgroundColor: '#141E39',
        borderRadius:5,
        paddingBottom: 50,
        paddingHorizontal: 15,
      }

});