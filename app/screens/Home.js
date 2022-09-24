import React,{Component} from 'react';
import {StyleSheet,View,Text,ImageBackground,Image,Dimensions,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import NewCard from '../components/NewCard';
import NewCard2 from '../components/NewCard2';
import NewCard3 from '../components/NewCard3';


export default class Home extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <ImageBackground
            style={styles.screen}
            source={require('../resources/background.jpg')}
        >
        <View style={styles.container}>
            <TouchableOpacity 
            style={{width:'100%',alignItems:'center'}} 
            onPress={()=>{this.props.navigation.navigate('ScanBarcode')}}
            >
           <NewCard/>
           </TouchableOpacity>

           <TouchableOpacity 
            style={{width:'100%',marginTop:30,alignItems:'center'}} 
            onPress={()=>{this.props.navigation.navigate('GenerateBarcode')}}
            >
           <NewCard2/>
           </TouchableOpacity>

           <TouchableOpacity 
            style={{width:'100%',marginTop:30,alignItems:'center'}} 
            onPress={()=>{this.props.navigation.navigate('ViewGroup')}}
            >
           <NewCard3/>
           </TouchableOpacity>

        </View>

        </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    container:{
        flex:1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    container2:{
        flexDirection:'row',
        marginTop:20,
        padding:20,
    },

});