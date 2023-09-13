import { View, Text, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Utils, colors } from '../../contants'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import ipc from '../../assests/Bareacts/ipc.json'

const BareActs = () => {

  const[searchText, setSearchText] = useState('');

  const tableData = [
    ['No.', 'Acts', ' '],
    ['1', 'Data 1', 'Row 1'],
    ['2', 'Data 2', 'Row 2'],
    ['3', 'Data 3', 'Row 3'],
  ];

  const card = ({ item }) => {
    // section_title
    return (
        <View style={{marginTop:Utils.ScreenHeight(1)}}>
          <View style={{padding:Utils.ScreenHeight(0.5)}}>
            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:700, color:colors.primary}}>{item?.section_title}</Text>
            <Text style={{fontSize:Utils.ScreenHeight(1.5), color:colors.grey}}>{item?.section_desc}</Text>
            </View>
            <View style={{height:Utils.ScreenHeight(0.2), width:"100%", backgroundColor:colors.grey2}}></View>
        </View>


    )
}

  return (
    <View style = {{backgroundColor: colors.white}}>

           <View style={{
                    height: Utils.ScreenHeight(6),
                    borderRadius: 8, 
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: colors.greyNoti, justifyContent: "flex-start"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ 
                      marginLeft:Utils.ScreenWidth(3),
                      resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchText(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: colors.primary,paddingHorizontal: Utils.ScreenWidth(2), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    
                </View>



    <View>
      
    </View>
    <View style={{ marginTop: Utils.ScreenHeight(3) }}>
  <View style={{ flexDirection: 'column', marginHorizontal: Utils.ScreenWidth(4) }}>
    {/* {tableData.map((rowData, rowIndex) => (
      <View
        key={rowIndex}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 0.5,
          borderColor: colors.primary,
          backgroundColor: rowIndex % 2 === 0 ? colors.primary : colors.greyNoti,
        }}>
        {rowData.map((cellData, cellIndex) => (
          <Text
            key={cellIndex}
            style={{
              flex: 1,
              color: rowIndex % 2 != 0 ? colors.black : colors.primaryText,
            }}>
            {cellData}
          </Text>
        ))}
      </View>
    ))} */}
    <Text>

    </Text>
    <FlatList
    data={ipc}
    renderItem={card}
    />
  </View>
</View>


    </View>
  )
}

export default BareActs