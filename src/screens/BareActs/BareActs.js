import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Utils, colors } from '../../contants'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'

const BareActs = () => {

  const[searchText, setSearchText] = useState('');

  const tableData = [
    ['No.', 'Acts', ' '],
    ['Row 1 Data 1', 'Row 1 Data 2', 'Row 1 Data 3'],
    ['Row 2 Data 1', 'Row 2 Data 2', 'Row 2 Data 3'],
    ['Row 3 Data 1', 'Row 3 Data 2', 'Row 3 Data 3'],
  ];

  return (
    <SafeAreaView style = {{backgroundColor: colors.white}}>
       <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
    <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    height: Utils.ScreenHeight(6),
                    borderRadius: 8, 
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: colors.greyNoti, justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchText(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: colors.primary,paddingHorizontal: Utils.ScreenWidth(2), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.primary }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>
                </View>

  <ScrollView style = {{backgroundColor: colors.white}}>

    <View>
      
    </View>
    <View style = {{ marginTop: Utils.ScreenHeight(3)}}>
            <View style={{ flexDirection: 'column', marginHorizontal: Utils.ScreenWidth(4)}}>
            {tableData.map((rowData, rowIndex) => (
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
                  <Text key={cellIndex} style={{ flex: 1 }}>
                    {cellData}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default BareActs