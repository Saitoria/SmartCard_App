import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function NewCard(){
        return(
            <View style={styles.container}>
<ImageBackground source={require('../resources/barcodepic.jpg')}style={styles.imgbackground} imageStyle={{borderRadius:15}}>
                <LinearGradient 
                colors={['#181a18','#00FF0000']}
                style={styles.BoxBG}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                >
                <View style={styles.textBox}>
                    <Text style={styles.itemText}>
                       Create Barcode
                    </Text>
                </View>
                </LinearGradient>
                </ImageBackground>
                </View>
        );
}


const styles = StyleSheet.create({
    BoxBG:{
        margin:0,
        padding:0,
        height:'100%',
        width:'100%',
        borderRadius:15,
    },
    textBox:{
        flex:1,
    },
    itemText:{
        color:'white',
        padding:10,
        paddingTop:60,
        fontSize:25,
        fontWeight:'bold',
    },
    imgbackground:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
    },
    container:{
        width:'85%',
        height:200,
    },


});