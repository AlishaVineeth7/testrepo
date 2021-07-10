import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
  } from 'react-native';
  import { styles } from './Style';
export default function DetailScreen ({route,navigation}){
   let data = route.params.data
   console.log('data',data);
return(
    <View style={{flex:1}}>
    <StatusBar backgroundColor="#5F9EA0" barStyle="light-content" />
        <SafeAreaView style={styles.safeArea} />
          <View style={styles.headerContainer}>
              <View style={styles.headingContainer}>
             <TouchableOpacity
                style={styles.backBtnTouch}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={{uri:'https://img.icons8.com/ios/50/ffffff/back.png'
                  }}
                  style={{height:20,width:20}}
                />
              </TouchableOpacity>
              <Text
                style={{fontSize:18,color:'white',marginLeft:15}}>
                Details
              </Text>
              </View>
          </View>
          <View style={{marginTop:20}}>

          <Image style={{height:110,width:110,resizeMode:'contain',borderRadius:50,alignSelf:'center'}} source={{uri : data.profile_image}} />
                <View style={{
                    alignSelf:'center',
                    marginTop:20,
                    alignItems:'center',
                    width:'90%',
                    backgroundColor:'rgb(157, 188, 189)',
                    borderRadius:30}}>
                  <Text style={{fontSize:25,color:'rgb(49, 108, 110)',fontWeight:'bold',marginTop:30}}>{data.name}</Text>
                  <Text style={{marginTop:20,color:'white',fontSize:20}}>Contact</Text>
                  <Text style={styles.text}>{data.phone}</Text>
                  <Text style={styles.text}>{data.email}</Text>
                  <Text style={{marginTop:20,color:'white',fontSize:20}}>Company Details</Text>
                  <Text style={styles.text}>{data.company.name}</Text>
                  <Text style={[styles.text,{marginBottom:30}]}>{data.website}</Text>
                  </View>
          </View>
           </View>
)
}