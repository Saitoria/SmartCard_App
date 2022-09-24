import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function CustBtn2({title}){
        return(
        <View style={styles.container}>
            <Text style={styles.txtStyle}>
                {title}
            </Text>
        </View>
        );
}


const styles = StyleSheet.create({
    container:{
        width:200,
        height:50,
        backgroundColor: 'tomato',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    txtStyle:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    }
});