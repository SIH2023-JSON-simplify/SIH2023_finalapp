// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Platform,
} from 'react-native';

import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fonts, icons } from "../../assets";
import { colors, screenNames, urls } from "../utilities/constants";
import { retrieveData, clearAsyncStorage, LOGIN_DETAILS } from '../utilities/AsyncStorageClass';
import { postDataSec } from '../service/ApiFun';
import { strings } from '../screens/NavigationScreens/LanguageScreen/StringsOfLanguages';

const CustomSidebarMenu = (props) => {

  const [UserDetails, setUserDetails] = useState({})

  const ItemView = (props) => {
    return (
      <View style={
        {
          marginLeft: 0, width: Dimensions.get('screen').width, borderTopRightRadius: 20, borderBottomRightRadius: 20,
          paddingLeft: 30, paddingRight: 10, paddingTop: Platform.OS === 'android' ? 10 : 10, paddingBottom: 10,
          flexDirection: 'row', backgroundColor: "white",
          alignItems: 'center'
        }
      }>
        <Image
          source={props.icon}
          style={{
            resizeMode: 'contain',
            width: 22,
            height: 22,
            marginRight: 10,
            marginHorizontal: 1,
          }}
        />

        <Text style={styles.txt}>
          {props.label}
        </Text>
      </View>
    )
  }

  useEffect(() => {
    async function fetchData() {
      postDataSec(urls.viewProfile).then(data => {
        if (data.status === 'error') {
          console.log("" + data.message)
        }
        else {
          setUserDetails(data.data)
          console.log("View Profile>>>>>>>>>>>>>>.",data)
        }
      }).catch(err => {
        console.log("" + err)
      })
    }
    fetchData();
  }, []);

  const SideMenuLayout = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 10, bottom: 0 }}>
        {/* Header View */}
        <TouchableOpacity onPress={() => props.navigation.navigate(screenNames.ViewProfile)} style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={icons.men}
              style={styles.sideMenuProfileIcon}>
            </Image>

            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontFamily: fonts.robot, color: colors.primary, fontWeight: '700', fontSize: 12 }}>{UserDetails.first_name + " " + UserDetails.last_name}</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.closeDrawer()
                    props.navigation.navigate(screenNames.ViewProfile)
                  }}
                >
                  <Text style={{ marginTop: 5, fontFamily: fonts.robot, color: colors.primary, fontSize: 11, fontWeight: '700' }}>{'View Profile'}</Text>
                </TouchableOpacity>
                {/* <Text style={{ marginTop: 10, fontFamily: fonts.robot, color: colors.primary, fontSize: 9, fontWeight: '700' }}>{" | "}</Text> */}
                {/* <TouchableOpacity
                  onPress={() => {
                    props.navigation.closeDrawer()
                    props.navigation.navigate(screenNames.EditProfile, { userDetails: UserDetails })
                  }}
                >
                  <Text style={{ marginTop: 10, fontFamily: fonts.robot, color: colors.primary, fontSize: 12, fontWeight: '700' }}>{strings.edit}</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </TouchableOpacity >

        <DrawerContentScrollView {...props} >
          {/* <DrawerItemList {...props} /> */}

          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => {
            props.navigation.navigate(screenNames.AddFamily)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.addFamily_primary} label={strings.addFamily}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.SecondOpinion)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.secondOpinion} label={strings.secondOpinion}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.Appointments)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.appinmentIcon} label={strings.appointments}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate("MedicalRecord")
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.medicalRecordIcon} label={strings.diagnosticReports}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.Invoices)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.invoicesIcon} label={strings.invoices}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.testBookingIcon} label={strings.testBookings}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.medicalOrdersIcon} label={strings.medicineOrders}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.PillManagement)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.pillPaymentsIcon} label={strings.pillManagement}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.Remainder)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.remindersIcon} label={strings.reminders}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.DoctorVitalsTab)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.paymentsIcon} label={strings.payments}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.AddVitals)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.addVitalsIcon} label={strings.addVitals}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.PrescriptionsRecord)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.myPrescriptionsIcon} label={strings.myPrescription}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate(screenNames.Settings)
            props.navigation.closeDrawer()
          }}>
            <ItemView icon={icons.settngsIcon} label={strings.settings}></ItemView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            //========Log out===============
            clearAsyncStorage().then(res => {
              props.navigation.reset({
                index: 0,
                routes: [{ name: screenNames.Signup }],
              });

            })

          }}>
            <ItemView icon={icons.logoutsIcon} label={strings.logout}></ItemView>
          </TouchableOpacity>

        </DrawerContentScrollView>

      </SafeAreaView>
    )
  }

  return (
    <SideMenuLayout {...props}></SideMenuLayout>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    marginLeft: 30,
    resizeMode: 'stretch', 
    backgroundColor: 'white',
    width: 50,
    height: 50, 
    alignSelf: 'flex-start', 
    borderRadius: 20, 
    tintColor: colors.placeholderColor
  },

  iconStyle: {
    resizeMode: 'center',
    width: 20,
    height: 20,
    marginRight: 30,
    marginHorizontal: 1,
  },

  iconStyle2: {
    resizeMode: 'center',
    width: 25,
    height: 25,
    marginRight: 30,
    marginHorizontal: 1,
  },

  customItem: {
    marginLeft: 20,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    textTransform: 'capitalize', fontFamily: fonts.robot, marginLeft: 5,
    color: 'black', fontSize: 10, fontWeight: '800'
  }
});

export default CustomSidebarMenu;