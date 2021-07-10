import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
  } from 'react-native';
  import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen ({route,navigation}){
    const [searchKey, setSearchKey] = React.useState(null);
    const [dataArray, setDataArray]=useState([])
    useEffect(()=>{
        const bootstrapAsync = async () => {
          try {
            const value = await AsyncStorage.getItem('employeeList')
            if(value !== null) {
              console.log('value -- ',JSON.parse(value)[0]);
             setDataArray(JSON.parse(value)[0])
            } else {
              NetInfo.fetch().then(state=>{
                if(state.isConnected){
                  fetch('http://www.mocky.io/v2/5d565297300000680030a986', {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    }})
                    .then(response => {
                      console.log('fetch response',response);
                      return Promise.all([response.json()]);
                    }
                    ) 
                    .then((responseJson) => {
                      console.log('responseJson',responseJson[0]);
                      storeData(responseJson)
                      setDataArray(responseJson[0])
                      
                    })
                    .catch((err)=>{console.log('request err',err)})
                }
              })
            }
          } catch(e) {
            // error reading value
            console.log('e',e);
          }
        }
        bootstrapAsync();
      },
      [])

      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('employeeList',JSON.stringify(value))
        } catch (e) {
          // saving error
          console.log('e',e);
        }
      }

      const renderItem = (item) => {
        //   console.log('item.item.name',item.item.company['name']);
          return(
              <TouchableOpacity 
              style={{
                  elevation:2,
                  borderRadius:20,
                  width:'95%',
                  alignSelf:'center',
                  backgroundColor:'rgb(157, 188, 189)',
                  padding:15,
                  margin:5}}
                  activeOpacity={0.6}
                  onPress={()=>{
                      navigation.navigate('DetailScreen',{
                          data : item.item
                      })
                  }}>
                      <View style={{flexDirection:'row'}}>
                          <Image style={{height:60,width:60,resizeMode:'contain',borderRadius:50}} source={{uri : item.item.profile_image}} />
                          <View style={{flex:1,marginLeft:10}}>
                              <Text style={{color:'rgb(49, 108, 110)',fontWeight:'bold',fontSize:16}}>{item.item.name}</Text>
                              <Text style={{color:'rgb(49, 108, 110)',fontWeight:'bold',fontSize:16, marginTop:8}}>{item.item.website}</Text>
                              </View>
                      </View>
              </TouchableOpacity>
          )
      }

return(
    <View style={{flex:1}}>
        <StatusBar backgroundColor="#5F9EA0" barStyle="light-content" />
        <View style={{
            padding:15,
            backgroundColor:'#5F9EA0'
            }}>
            <View style={{padding:5,
            width:'95%',
            alignSelf:'center',
            backgroundColor:'#dcdcdc',
            borderRadius:30,flexDirection:'row'}}>
            <TextInput
        style={{marginLeft:15,flex:1}}
        onChangeText={setSearchKey}
        value={searchKey}
        placeholder="Search Employees"
        keyboardType='email-address'
      />
         <TouchableOpacity
                style={{ alignItems: 'center',
                justifyContent: 'center',
        paddingHorizontal:10}}
                onPress={() => {
                let temp = dataArray.filter(data => {
                   return data.name === searchKey}
                    );
                    setDataArray(temp)
                console.log('temp',temp);
                }}>
                <Image
                  source={{uri:'https://img.icons8.com/ios/50/000000/search--v4.png'
                  }}
                  style={{height:20,width:20}}
                />
              </TouchableOpacity>
            </View>
        </View>
            <FlatList
          data={dataArray}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => renderItem(item)}
          key={(item, index) => index.toString()}
          keyExtractor={(item, index) => index.toString()}
        //   ListEmptyComponent={() => {
        //     if (!loading) {
        //       if (apiError) {
        //         return retryComponent()
        //       } else {
        //         return EmptyListComponent()
        //       }
        //     }
        //   }
          //}
        //   contentContainerStyle={{ flexGrow: 1 }}
        />
    </View>
)
}