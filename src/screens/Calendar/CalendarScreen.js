import React, { useState, useRef, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, Keyboard, TouchableOpacity, TextInput, StatusBar, Switch, FlatList, ActivityIndicator, ImageBackground, Modal, AppState, } from 'react-native';


import styles from './styles';
import moment from 'moment';

// import CustomLoader from '../../../component/CustomLoader';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ApiUrl from '../../Lib/ApiUrl';
import Helper from '../../Lib/Helper';
import ImagesPath from '../../assests/ImagesPath';
import { Utils, colors } from '../../contants';
import { useNavigation } from '@react-navigation/native';


const CalendarScreen = (props) => {
    const navigation = useNavigation();
    const [closeModal, setCloseModal] = useState(false);
    const {  route } = props;

    const blockFrom = route?.params?.blockFrom;
    const blockTo = route?.params?.blockTo;
    const currDateParams = route?.params?.currDate;
    console.log("currDateParams...", currDateParams);
    const [appoinmentstatus, setAppointmentstatus] = useState("");
   
    const [callJoin, setCallJoin] = useState('');
    const [access, setaccess] = useState("");
    const [artclBaseUrl, setArtclBaseUrl] = useState('');
    const [articlesData, setArticlesData] = useState([]);
    const [appointmentsData, setAppointmentsData] = useState([]);
    const [docData, setDocData] = useState([]);
    const [blockedDates, setBlockedDates] = useState([]);

    const [isRef, setIsRef] = useState(false)
    const [isSwitch, setIsSwitch] = useState(false);
    const [isLoader, setiIsLoader] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [toggleMonth, setToggleMonth] = useState(false);
    const [dateSelected, setDateSelected] = useState('');
    const [toggleBlock, setToggleBlock] = useState(false);
    const [modalPopup, setModalPopup] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMenuVisible, setModalMenuVisible] = useState(false)
    const [collectitem, setcollectitem] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [leaveDetails, setLeaveDetails] = useState('')
    const [ampm, setAMPM] = useState('AM');
    const setNoShowH = moment().format('hh')
    const setNoShowM = moment().format('mm')
    const [selectedItem, setSelectedItem] = useState('');
    const [currDate, setCurrDate] = useState(moment(new Date()).format('DD MMM, y'));
    console.log('first', currDate);
    const [getDateData, setGetDateData] = useState([]);
    const [selectCalender, setSelectCalender] = useState(null);
    const [restrictFunction, setRestrictFunction] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');


   
 





    const getDatesArray = (startDate, endDate) => {
        const datesArray = [];
        const currentDate = new Date(startDate);
        const lastDate = new Date(endDate);

        while (currentDate <= lastDate) {
            datesArray.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return datesArray;
    }

    const datesArray = getDatesArray(blockedDates?.start_date, blockedDates?.end_date);
   
    useEffect(() => {

        setAppointmentDate(moment(new Date()).format('DD MMM, y'));
        var curr = new Date;
        var firstday1 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
        var firstday2 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
        var firstday3 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
        var firstday4 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
        var firstday5 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
        var firstday6 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
        var firstday7 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));

        let obj = [
            { 'first': firstday1, },
            { 'first': firstday2, },
            { 'first': firstday3 },
            { 'first': firstday4 },
            { 'first': firstday5 },
            { 'first': firstday6 },
            { 'first': firstday7 },
        ]
        setCurrDate(moment(new Date()).format('DD MMM, y'))
        setGetDateData(obj);
        setSelectCalender(null);
    }, [navigation])

   
    

    useEffect(() => {
        if (currDate) {
            // listAppointmentsApi(currDate);
            setAppointmentDate(moment(new Date()).format('DD MMM, y'));
        }
    }, [currDate]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // getDoctorApi();
           
            setCurrDate(moment(new Date()).format('DD MMM, y'))
            

            // listBlockedDatesApi()
            // setIsRef(!isRef);
        });
        return unsubscribe;
    }, [navigation]);


    useEffect(() => {
        Helper.setData('appointmentDate',moment(new Date()).format('DD MMM, y') )
        Helper.getData('appointmentDate').then((date) => {
            let data = JSON.stringify(date)
            setAppointmentDate(data);
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        })
       
    }, [])

    

    const customDayStyle = (date) => {
        if (date.dateString === dateSelected) {
            return {
                containerStyle: {
                    backgroundColor: colors.primary,
                },
                textStyle: {
                    color: '#fff',
                },
                dotStyle: {
                    backgroundColor: 'black',
                },
            };
        }
        return {};
    };


    const markedDates = {
        [dateSelected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: colors.primary,
        },
        ...datesArray.reduce((obj, date) => {
            obj[date] = {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: colors.grey2,
                dotColor: '#FFFF00',
                selectedTextColor: 'white',
                selectedColor: '#808080',
                disabled: true
            };
            return obj;
        }, {}),
    };

   

    
   

    const callPatient = () => {
        const args = {
            number: selectedItem?.get_name?.phone,
            prompt: false,
            skipCanOpen: true
        }
        call(args).catch(console.error)
    }
    const selectCalenderFunc = async (item, index) => {
        //console.log('Item in Select', item);
        if (selectCalender === index) {
            //console.log("If");
            setSelectCalender(null);
            setCurrDate(moment(new Date(item.first)).format('DD MMM, y'), () => {
                // This callback will be executed after the state is updated
                // Now you can safely call listAppointmentsApi with the updated currDate
                listAppointmentsApi(currDate);
            })
            Helper.setData('appointmentDate', moment(item.first).format('DD MMM, y'))
            setIsRef(!isRef);
            //listAppointmentsApi(currDate);
            // setIsRef(!isRef);
        } else {
            //console.log("Else");
            setSelectCalender(index);
            setIsRef(!isRef);
            setCurrDate(moment(new Date(item.first)).format('DD MMM, y'), () => {
                // This callback will be executed after the state is updated
                // Now you can safely call listAppointmentsApi with the updated currDate
                listAppointmentsApi(currDate);
            })
            Helper.setData('appointmentDate', moment(item.first).format('DD MMM, y'))
            //setCurrDate('');
            // listAppointmentsApi(currDate);
            //setIsRef(!isRef);
        }
    }

    


    const availabilityCalenderList = ({ item, index }) => {
        const newDate = moment(item.first).format('DD MMM, y');
        //console.log("New Date>>>>>>>>>>>>>>>>>>", newDate, currDate);
        // setNewDate(date);
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => { selectCalenderFunc(item, index) }}
                    style={[styles.daysMonthasViewCss, { backgroundColor: colors.white },styles.monthsTextCss, {
                        elevation: currDate === newDate || selectCalender === index ? 15 : 0,
                        color: currDate === newDate || selectCalender === index ? colors.white : colors.black,
                        backgroundColor: selectCalender === index ? colors.secondary :
                        currDate === newDate ? colors.primary :
                        colors.white, 
                    }]}>
                        <View style={{justifyContent:"center", alignItems:"center", }}>
                    <View >
                        <Text style={{fontWeight:500, color:colors.primary, fontSize:18}}>{moment(item.first).format('DD')}</Text>
                    </View>
                        {/* <Text style={[styles.daysTextCss, { color: currDate === newDate || selectCalender === index ? colors.black : colors.black }]}>{moment(item.first).format('dd')}</Text> */}
                        <Text style={{color:colors.grey,fontSize:12}}>{moment(item.first).format('dd')}</Text>
                    </View>
                    {
                        selectCalender === index && <View style={{height:Utils.ScreenHeight(0.8),width:Utils.ScreenHeight(0.8),marginTop:Utils.ScreenHeight(1), backgroundColor:colors.primary, borderRadius:10}}></View>
                    }
                </TouchableOpacity>
            </>
        )
    }
    const footer = () => {
      
        return (
            <>
                <View style={{marginBottom:Utils.ScreenHeight(10)}}></View>
            </>
        )
    }




    // const appointmentCards = (item) => {
    //     //console.log("Item...>>>>>>>>>..", item?.item.date);
    //     const currentTime = moment();
    //     const slotTime = moment(item?.item?.slot, 'hh:mm:ss A');
    //     const slotDate = moment(item?.item?.date, 'YYYY-MM-DD');
    //     const endTime = slotTime.clone().add(5, 'minutes');
    //     const isTimeGreaterThanCurrent = endTime.isAfter(currentTime);
    //     const today = moment().startOf('day');
    //     const slotDateInt = parseInt(slotDate.format('YYYYMMDD'), 10);
    //     const todayInt = parseInt(today.format('YYYYMMDD'), 10);
    //     const isSlotDateAfterToday = slotDateInt > todayInt;
    //     const patientStatus = item?.item?.patient_status;
    //     const displayText =
    //         patientStatus === 'pending' ? 'Check In' :
    //             patientStatus === 'engage' ? 'Engage' :
    //                 patientStatus === 'engaged' ? 'Engaged' :
    //                     'Checked Out';

    //     // console.log('slotDate:', slotDateInt);
    //     // console.log('today:', todayInt);
    //     // console.log('isSlotDateAfterToday:', isSlotDateAfterToday);
    //     return (
    //         <TouchableOpacity
    //             onPress={() => {
    //                 setSelectedItem(item?.item);
    //                 setRestrictFunction(patientStatus)
    //                 setModalMenuVisible(true);
    //             }}
    //             activeOpacity={0.3}
    //         >
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     marginVertical: Utils.ScreenHeight(0),
    //                     width: '100%',
    //                     height: Utils.ScreenHeight(15),
    //                     borderRadius: 0,
    //                     backgroundColor: colors.white,
    //                     alignItems: 'center',
    //                     borderWidth: 1,
    //                     borderColor: colors.grey2,
    //                 }}
    //             >
    //                 <View
    //                     style={{
    //                         width: '2%',
    //                         alignSelf: 'flex-start',
    //                         height: '100%',
    //                         backgroundColor: colors.primary,
    //                         borderTopLeftRadius: 0,
    //                         borderBottomLeftRadius: 0,
    //                     }}
    //                 ></View>
    //                 <View
    //                     style={{
    //                         position: 'relative',
    //                         alignSelf: 'flex-start',
    //                         justifyContent: 'center',
    //                         alignItems: 'flex-start',
    //                         marginHorizontal: Utils.ScreenWidth(2),
    //                         height: '100%',
    //                         width: '50%',
    //                         flexDirection: 'column',
    //                     }}
    //                 >
    //                     <Text
    //                         style={{
    //                             textAlign: 'center',
    //                             color: 'grey',
    //                             fontSize: 15,
    //                             fontWeight: '600',
    //                             marginVertical: 3,
    //                         }}
    //                     >
    //                         {item?.item?.get_name?.first_name} {item?.item?.get_name?.last_name}
    //                     </Text>
    //                     <Text
    //                         style={{
    //                             textAlign: 'center',
    //                             color: colors.grey,
    //                             fontSize: 11,
    //                             fontFamily: fonts.extraBold,
    //                         }}
    //                     >
    //                         {item?.item?.booking_type === 'clinicVisit'
    //                             ? 'Clinic Visit'
    //                             : item?.item?.booking_type === 'video'
    //                                 ? 'Video Appointment'
    //                                 : 'Home Visit'}
    //                     </Text>
    //                     <Text
    //                         style={{
    //                             textAlign: 'center',
    //                             color: colors.primary,
    //                             fontSize: 11,
    //                             fontWeight: '600',
    //                             marginVertical: 3,
    //                         }}
    //                     >
    //                         {moment(item?.item?.slot, 'hh:mm:ss A').format('hh:mm A')} -{' '}
    //                         {moment(item?.item?.slot, 'hh:mm:ss A')
    //                             .add(15, 'minutes')
    //                             .format('hh:mm A')}
    //                     </Text>
    //                 </View>
    //                 {item?.item?.booking_type === 'video'  ? (
    //                     <>
    //                         <TouchableOpacity
    //                             activeOpacity={0.3}
    //                             onPress={() => {
    //                                 navigation.navigate('VideoCallAgora', {
    //                                     booking_id: item?.item?.id,
    //                                     details:item?.item
    //                                 });
    //                                 //setBookingId(item?.item?.id)
    //                             }}
    //                             style={{
    //                                 width: '30%',
    //                                 height: 30,
    //                                 borderWidth: 1,
    //                                 borderColor: colors.green,
    //                                 borderRadius: 7,
    //                                 alignItems: 'center',
    //                                 padding: 1,
    //                                 justifyContent: 'center',
    //                             }}
    //                         >
    //                             <Text style={{ color: colors.green, fontSize: 12, textAlign: 'center' }}>Connect</Text>
    //                         </TouchableOpacity>
    //                         <View>
    //                             <Image source={ImagesPath.home.three_dots} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
    //                         </View>
    //                     </>
    //                 ) : null}
    //                 <View style={{ width: '30%' }}>
    //                     {item?.item?.booking_type === 'clinicVisit' && patientStatus !== 'cancelled' && patientStatus !== 'no_show' && patientStatus !== 'finished' && (
    //                         <TouchableOpacity
    //                             activeOpacity={0.3}
    //                             onPress={() => {
    //                                 changeappoinmentstatus(item?.item?.id, item?.item?.patient_status, item);
    //                             }}
    //                             style={{
    //                                 height: 30,
    //                                 borderWidth: 1,
    //                                 borderColor: 'navy',
    //                                 borderRadius: 7,
    //                                 alignItems: 'center',
    //                                 padding: 1,
    //                                 justifyContent: 'center',
    //                             }}
    //                         >
    //                             <Text style={{ color: 'navy', fontSize: 12, textAlign: 'center' }}>{displayText}</Text>
    //                         </TouchableOpacity>
    //                     )}

    //                     {item?.item?.booking_type === 'clinicVisit' && patientStatus === 'cancelled' && patientStatus !== 'no_show' && patientStatus !== 'finished' && (
    //                         <TouchableOpacity
    //                             activeOpacity={0.3}
    //                             onPress={() => { }}
    //                             style={{
    //                                 height: 30,
    //                                 borderWidth: 1,
    //                                 borderColor: 'orange',
    //                                 borderRadius: 7,
    //                                 alignItems: 'center',
    //                                 padding: 1,
    //                                 justifyContent: 'center',
    //                             }}
    //                         >
    //                             <Text style={{ color: 'orange', fontSize: 12, textAlign: 'center' }}>{'Cancelled'}</Text>
    //                         </TouchableOpacity>
    //                     )}

    //                     {patientStatus === 'no_show' && patientStatus !== 'finished' && (
    //                         <TouchableOpacity
    //                             activeOpacity={0.3}
    //                             style={{
    //                                 height: 30,
    //                                 borderWidth: 1,
    //                                 borderColor: 'red',
    //                                 borderRadius: 7,
    //                                 alignItems: 'center',
    //                                 padding: 1,
    //                                 justifyContent: 'center',
    //                             }}
    //                         >
    //                             <Text style={{ color: 'red', fontSize: 12, textAlign: 'center' }}>No Show</Text>
    //                         </TouchableOpacity>
    //                     )}

    //                     {item?.item?.booking_type === 'clinicVisit' && patientStatus !== 'cancelled' && patientStatus !== 'no_show' && patientStatus !== 'finished' && (
    //                         <>
    //                             {/* <Text style={{ textAlign: 'center', fontSize: 13, color: colors.newGrey, fontWeight: '500' }}>Checked Out</Text> */}
    //                             <TouchableOpacity
    //                                 onPress={() => {
    //                                     navigation.navigate('CollectPayment', { selectedItem: item?.item });
    //                                 }}
    //                                 activeOpacity={0.3}
    //                                 style={{
    //                                     height: 30,
    //                                     borderWidth: 1,
    //                                     borderColor: '#007a7a',
    //                                     borderRadius: 7,
    //                                     alignItems: 'center',
    //                                     padding: 1,
    //                                     justifyContent: 'center',
    //                                     marginTop: Utils.ScreenHeight(2),
    //                                 }}
    //                             >
    //                                 <Text style={{ color: '#007a7a', fontSize: 12, textAlign: 'center' }}>Collect Payment</Text>
    //                             </TouchableOpacity>
    //                         </>
    //                     )}

    //                     {patientStatus === 'finished' && (
    //                         <>
    //                             {/* <Text style={{ textAlign: 'center', fontSize: 13, color: colors.newGrey, fontWeight: '500' }}>Checked Out</Text> */}
    //                             <TouchableOpacity
    //                                 onPress={() => {
    //                                     navigation.navigate('CollectPayment', { selectedItem: item?.item });
    //                                 }}
    //                                 activeOpacity={0.3}
    //                                 style={{
    //                                     height: 30,
    //                                     borderWidth: 1,
    //                                     borderColor: '#007a7a',
    //                                     borderRadius: 7,
    //                                     alignItems: 'center',
    //                                     padding: 1,
    //                                     justifyContent: 'center',
    //                                     // marginTop: Utils.ScreenHeight(2),
    //                                 }}
    //                             >
    //                                 <Text style={{ color: '#007a7a', fontSize: 12, textAlign: 'center' }}>Paid</Text>
    //                             </TouchableOpacity>
    //                         </>
    //                     )}

    //                 </View>
    //                 <View>
    //                     <Image source={ImagesPath.home.three_dots} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
    //                 </View>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    

   



    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.primary }} />
            <SafeAreaView style={styles.container}>
                <View style={{ flex: toggleMonth ? 0.1 : 0.1 }}>
                   
                    <View style={styles.lableConsultationViewCss}>
                        <TouchableOpacity activeOpacity={0.3} onPress={() => { setToggleMonth(true) }} style={[styles.toggleMonthView,
                        {
                            backgroundColor: toggleMonth ? colors.primary : colors.white,
                            borderColor: toggleMonth ? colors.primary : 'grey',
                        }]}>
                            <Text style={[styles.toggleMonthText, { color: toggleMonth ? colors.white : colors.black, }]}>Month</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3} onPress={() => { setToggleMonth(false) }} style={{ width: '30%', height: Utils.ScreenHeight(3.7), borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: toggleMonth ? colors.white : colors.primary, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: toggleMonth ? 'grey' : colors.primary, }}>
                            <Text style={{ textAlign: 'center', color: toggleMonth ? 'grey' : colors.white, fontSize: 13, fontWeight: '500'  }}>Week</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {toggleMonth === false ?
                    <View style={{ flex:1, }}>
                        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
                          
                            <FlatList
                                horizontal={true}
                                data={getDateData}
                                extraData={useState}
                                renderItem={availabilityCalenderList}
                                showsHorizontalScrollIndicator={false}
                                
                            />
                            
                           
                        </View>
                        <View style={{marginTop:Utils.ScreenHeight(1), marginHorizontal:Utils.ScreenWidth(4)}}>
                       <Text style={{fontSize:18, fontWeight:500, color:colors.primary}}>Todays Schedule</Text>

                       <ScrollView style={{marginTop:Utils.ScreenHeight(2)}}>

                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={()=>{navigation.navigate("VideoCall")}}
                                    style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            

                       </ScrollView>
                       </View>


                    </View>
                    : null
                }
                {toggleMonth &&
                    <View style={{ flex: 0.85 }}>
                        <View style={{ marginVertical: Utils.ScreenHeight(0) }}>
                            <Calendar
                                onDayPress={day => {
                                    setDateSelected(day.dateString);
                                    console.log("pressed ",moment(day.dateString).format('DD MMM, y'))
                                    // listAppointmentsApi(moment(day.dateString).format('DD MMM, y'))
                                    console.log(dateSelected)
                                }}
                                theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    textSectionTitleColor: 'black',
                                    textDayHeaderFontWeight: '600',
                                    textDayFontWeight: '600',
                                    textMonthFontWeight: '600',
                                    selectedDayBackgroundColor: colors.primary,
                                    selectedDayTextColor: '#fff',
                                    todayTextColor: colors.primary,
                                    dayTextColor: '#2d4150',
                                    selectedDotColor: '#FFFF00',
                                    dotColor: '#FFFF00',
                                    textDisabledColor: 'grey'
                                }}
                                // markedDates={{
                                //     [dateSelected]: { selected: true, disableTouchEvent: true, selectedDotColor: colors.primary },
                                //     [datesArray]: { selected: true, disableTouchEvent: true, selectedDotColor: colors.grey2, dotColor: 'red', selectedTextColor: 'white', selectedColor: 'grey' },
                                // }}
                                markedDates={markedDates}
                                renderDay={(day, item) => (
                                    <Calendar.Day
                                        {...day}
                                        {...item}
                                        style={customDayStyle(day)}
                                    />
                                )}
                            />
                        </View>
                        <View style={{marginTop:Utils.ScreenHeight(1), marginHorizontal:Utils.ScreenWidth(4)}}>
                       <Text style={{fontSize:18, fontWeight:500, color:colors.primary}}>Todays Schedule</Text>

                       <ScrollView style={{marginTop:Utils.ScreenHeight(2)}}>

                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginBottom:Utils.ScreenHeight(2)}} >
                                <View style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(2), backgroundColor:colors.primary}}></View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between", backgroundColor:colors.secondary, height:Utils.ScreenHeight(8), marginLeft:Utils.ScreenWidth(3),marginRight:Utils.ScreenWidth(2), borderRadius:12}}>
                                   <View style={{padding:Utils.ScreenHeight(1)}}>
                                    <Text style={{fontWeight:500, fontSize:15}}>Vishesh Gatha</Text>
                                    <Text style={{fontWeight:300, fontSize:10}}>Video Appointment</Text>
                                    <Text style={{fontWeight:500, fontSize:10,marginTop:Utils.ScreenHeight(1) }}>8pm-10pm</Text>
                                    </View>
                                    <TouchableOpacity style={{marginRight:Utils.ScreenWidth(4), backgroundColor:colors.tertiary,borderRadius:8 }}>
                                        <Text style={{padding:Utils.ScreenWidth(1) , color:colors.primary, fontWeight:500}}>Connect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                       </ScrollView>
                       </View>

                        
                      
                    </View>
                }
                <TouchableOpacity
                onPress={()=>{navigation.navigate("AddSchedule")}}
                style={{
                    position:"absolute",bottom:Utils.ScreenHeight(1),right:Utils.ScreenWidth(8),
                    height:Utils.ScreenHeight(6), width:Utils.ScreenHeight(6), backgroundColor:colors.primary,borderRadius:40}}>
                        <Text style={{textAlign:"center",fontSize:40, color:colors.white }}>+</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        </>
    );
}


export default CalendarScreen;