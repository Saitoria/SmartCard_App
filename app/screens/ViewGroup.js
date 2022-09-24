import React, {useState,useEffect} from 'react';
import {StyleSheet,View,Text,FlatList,ImageBackground,Dimensions,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import CustBtn2 from '../components/CustBtn2';

export default function ViewGroup(){
  const [course,setCourse] = useState(null);
  const [studentList,setStudentList] = useState(null);

  const [bitList,setbitList] = useState([
    {key:'20190400175',name:'Sophia Y.Ahmed',year:'3'},
    {key:'20190412632',name:'Winfrida Yudathadei',year:'3'},
    {key:'20190408908',name:'Elizabeth A. Mwakitambo',year:'3'},
    {key:'20190413149',name:'Gabriela R. Woiso',year:'3'},
  ]);

  const [csList,setCsList] = useState([
    {key:'20190407303',name:'Winstone Mjule',year:'3'},
    {key:'20190412582',name:'Mathias Thomas',year:'3'},
    {key:'20190408545',name:'Aaron Audax',year:'3'},
    {key:'20190405756',name:'Emmanuel J. Malamsha',year:'3'},
  ]);

  const [ceitList,setCeitList] = useState([
    {key:'20190411297',name:'Saroni W. Saitoria',year:'3'},
    {key:'20190408124',name:'Daniel S. Msangi',year:'3'},
    {key:'20190410399',name:'Calvin A. Ogigo',year:'3'},
    {key:'20190412812',name:'Machuche M. Wambura',year:'3'},
  ]);

  const renderItem2 = ({ item }) => (
    <View style={styles.renderItemcontainer}>
    <Text style={styles.itemname}>{item.name}</Text>
    <Text style={styles.itemkey}>{item.key}</Text>
    <Text style={styles.itemyear}>Year: {item.year}</Text>
  </View>
  );

  const viewStudentGroups = () => {
    if(course=="BIT")
    {
      setStudentList(bitList);
    }
    else if(course=="CS")
    {
      setStudentList(csList);
    }
    else
    {
      setStudentList(ceitList);
    }
  }

    return(

            <ImageBackground 
            style={styles.screen}
            source={require('../resources/background.jpg')}
            >
            <TouchableWithoutFeedback
            onPress={()=>{Keyboard.dismiss()}}
            >
              <View style={styles.container}>
              <View style={styles.upperContainer}>
              <View style={{width:'100%',marginBottom:10,}}>
              <Text style={{color:'tomato',textAlign:'center',fontSize:30,fontWeight:'bold',marginBottom:20}}>View student group</Text>
              </View>
              </View>

            <View style={styles.searchContainer}>
            <View style={styles.txtInputContainer}>
            <TextInput
            placeholder={'Class code:'}
            placeholderTextColor={'tomato'}
            style={styles.txtStyle}
            onChangeText={(val)=>setCourse(val)}
            />
            </View>

            <TouchableOpacity onPress={viewStudentGroups} >
            <CustBtn2 title={'VIEW'}/>
            </TouchableOpacity>
            </View>

          <View style={{position:'absolute',top:300}}>
          <FlatList
          data={studentList}
          renderItem = {renderItem2}
          keyExtractor={val => val.key}
          />
          </View>


              </View>
              </TouchableWithoutFeedback>
              </ImageBackground>
              
        );
    }


const styles = StyleSheet.create({
    screen:{
      flex:1,
      width:'100%',
      height:Dimensions.get('screen').height,
  },
    upperContainer:{
    position:'absolute',
    top:'2%',
    width:'100%',
    alignContent:'center',
    alignItems:'center',
  },
    container:{
      flex:1,
      backgroundColor: 'rgba(255,255,255,0.8)',
      alignItems:'center',
      justifyContent:'center',
    },
    txtStyle:{
      borderBottomWidth:1,
      width:'100%',
      height:'30%',
      borderBottomColor:'tomato',
      color:'black',
      marginBottom:10,
    },
    txtInputContainer:{
      marginTop:10,
      width:'70%',
      alignContent:'center',
      justifyContent:'center',

  },
  searchContainer:{
    height:500,
    width:'90%',
    alignItems:'center',
    position:'absolute',
    top:10,
  },

  renderItemcontainer:{
    width:'90%',
    height:70,
    flexDirection:'row',
    padding:10,
    borderBottomWidth:1,
    borderColor:'tomato',
  },
  itemname:{
    color:'tomato',
    padding:10,
  },
  itemkey:{
    color:'tomato',
    padding:10,
  },
  itemyear:{
    color:'tomato',
    padding:10,
  },
});