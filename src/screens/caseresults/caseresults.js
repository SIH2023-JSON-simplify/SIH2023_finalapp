import { View, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../../assests/ImagesPath'
import WebView from 'react-native-webview'

const caseresults = () => {
    const casedata = {
        "data": {
            "user": 1,
            "case_no": "3488",
            "year": 2021,
            "json_data": {
                "con": [
                    {
                        "case_no": "200124034882021",
                        "pet_name": "CHARKOP POLICE STATION",
                        "case_no2": 3488,
                        "case_year": 2021,
                        "res_name": "SANI SUBHASH TAYADE",
                        "cino": "MHMM170114432021",
                        "party_name1": "N",
                        "party_name2": "N",
                        "type_name": "Police cases  S",
                        "hideparty": "N"
                    },
                    {
                        "case_no": "200224034882021",
                        "pet_name": "MALAD POLICE STATION",
                        "case_no2": 2403488,
                        "case_year": 2021,
                        "res_name": "KALPESH ANAND JADHAV AND 6 ORS",
                        "cino": "MHMM170127402021",
                        "party_name1": "N",
                        "party_name2": "N",
                        "type_name": "Police cases W",
                        "hideparty": "N"
                    }
                ],
                "totRecords": 2,
                "cntEst2": 1,
                "courtNameArr": [
                    "Additional Metropolitan Magistrate, Borivali, Mumbai"
                ],
                "court_code": [
                    "5"
                ],
                "totEstCnt": [
                    2
                ],
                "normalVArr": [
                    null
                ],
                "hide_partyname_est": [
                    "N"
                ],
                "Error": ""
            }
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

        });
        console.log("useeff called ");
        return unsubscribe;
    }, []);
    const[visible,setVisible] = useState(false);
    const[detailsuri,setdetailsuri] = useState("");
    const openLinkInWebView = () => setVisible(true);
    const yourHtmlContent = `
   
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Case History</title>

<style type="text/css">
a {
	color: #5399E1;
	text-decoration:none;
}
a:hover {
	color: #366494;
	text-decoration:underline;
}
a:focus {
	color: #366494;
	text-decoration:underline;
}
body
{	font-size:12px;
}
tbody
{	font-size:12px;
}

#nextDate {   
  animation-duration: 700ms;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes blink {
  from {
	opacity: 1;
  }

  to {
	opacity: 0;
  }
}

.h3class{
font-size:1em;
padding-top:-10px;

font-weight:normal;
margin-bottom:5px;

}

.h2class{
font-size:1.1em;
font-weight:normal;
padding-top:-10px;
margin-bottom:5px;
}
.h1class{
font-size:1.2em;
font-weight:normal;
}
.controlstyle
{ display:none;}
</style>
<link rel="stylesheet" href="../css/history.css" type="text/css">
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/fluidtextresizer.js"></script>
<script type="text/javascript" language="javascript">
//<![CDATA[


function newcss()
{
	var sess_color_value="W";
			
				if(sess_color_value=='B' )
	{
				applycssblack1();
	}
	else if(sess_color_value=='W' )
	{
				applycsswhite1();
	}
	else if (parent.document.getElementById("txt_css").value=='black')
	{
	parent.applycssblack();
	}
	else if (parent.document.getElementById("txt_css").value=='white')
	{
	parent.applycsswhite();
	}
}
function openpopup(popurl)
{
	var winpops=window.open(popurl,"","width=400,height=400,scrollbars,menubar,resizable")
}


//]]>
</script>
<script type="text/javascript" language="javascript">
 //<![CDATA[
var mytextsizer=new fluidtextresizer({
	controlsdiv: "sizecontroldiv", //id of special div containing your resize controls. Enter "" if not defined
	targets: ["body"], //target elements to resize text within: ["selector1", "selector2", etc]
	levels: 1, //number of levels users can magnify (or shrink) text
	persist: "session", //enter "session" or "none"
	animate: 200 //animation duration of text resize. Enter 0 to disable
})

 //]]>
</script>
<script language="JavaScript" src="../includes/javascript/xmlhttp.js" type="text/javascript"></script>



</head>
<form  name="frm" method="post" action="">
<body onload="funchkErr();" >

<div id="sizecontroldiv" class="controlstyle">
<a href="#smaller" ></a><a href="#fontsize0"></a><a href="#bigger"></a>
</div>


<div  align="center" style='margin-top:-5px;'>

<span id='errSpan' style='font-color:red;'></span>
<span style='margin-top:-20px;'>



</span>
<br />


<h1 class='h1class'><span style="font-weight:bold;">Additional Metropolitan Magistrate, Borivali, Mumbai</span></h1>
	
<div  style=' height:80px; width:700px; '><span class="heading" style=' text-align:center;'><label><h2 class='h2class' style='font-weight:bold;'>Case Details</h2></label></span><span class='case_details_table' style='padding-left:-5px;float:left;border-top:1px solid #000;border-left:1px solid #000;border-right:1px solid #000;border-bottom:1px solid #000; width:100%; text-align:left;'><span  style='-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; width:225px;float:left;padding-left:5px;'><label>Case Type </label></span>:&nbsp;Police cases  S</span><br /><span class='case_details_table' style='float:left;border-top:0px solid #000;border-bottom:1px solid #000;border-left:1px solid #000;border-right:1px solid #000;width:100%;text-align:left;'><span style='-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; width:225px;float:left;padding-left:5px; '><label>Filing Number</label></span>:&nbsp;904613/2021<span style='text-align:left;padding-left:100px;'><label>Filing Date</label>: 10-05-2021</span></span><br /><span class='case_details_table' style='float:left;border-top:0px solid #000;border-left:1px solid #000;border-right:1px solid #000;border-bottom:1px solid #000; width:100%;text-align:left;'><span style='-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; width:225px; float:left;padding-left:5px;'><label>Registration Number</label></span><label>:&nbsp;4301388/2021</label><span style='text-align:left;padding-left:100px;'><label>Registration Date</label><label>:&nbsp;10-05-2021</label></span></span><br /><b><span class='case_details_table' style='float:left; width:100%;text-align:left;border-top:1px solid #000;border-left:1px solid #000;border-right:1px solid #000;border-top:0px;border-bottom:1px solid #000;'><span style='-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; width:225px;float:left;padding-left:5px;'><label>CNR Number</label></span>:&nbsp;MHMM17-004791-2021</span></b></div><br /><h2 class='h2class' style=' clear:both;color:red;font-weight:bold;display: block;'>Case Status</h2><div  style='width:700px;margin-top:0px;background-color:#FBF6D9;font-size:1em ;font-weight:200;color:red;text-align:center;'><span >
	<label style='float:left;border-top:1px solid red; border-bottom:1px solid red; width:100%;border-left:1px solid red ;border-right:1px solid red;'><strong style='float:left; width:225px;text-align:left; padding-left:5px;'>First Hearing Date </strong><strong style='float:left;'>:&nbsp;22nd September 2021</strong></label></span><br style='clear:left;'/><span><label style='float:left;border-bottom:1px solid red; width:100%;border-left:1px solid red ;border-right:1px solid red ;'><strong style='float:left; width:225px;text-align:left; padding-left:5px;'>Next Hearing Date</strong><strong style='float:left;'>:&nbsp;22nd January 2024</strong></label></span><br style='clear:left;'/><span ><label  style='float:left; border-bottom:1px solid red; width:100%;border-left:1px solid red ;border-right:1px solid red ;'><strong style='float:left; width:225px;text-align:left; padding-left:5px;'>Case Stage</strong><strong style='float:left;'>:&nbsp;NOT HEARD CASES</strong></label></span><br style='clear:left;'/><span><label  style='float:left;border-left:1px solid red ;border-right:1px solid red ; border-bottom:1px solid red ;  width:100%;border-left:1px solid red ;border-right:1px solid red ;height:auto;'><strong style='float:left; width:225px;text-align:left; padding-left:5px;'>Court Number and Judge</strong> <strong style='float:left;width:470px; text-align:left;'> :&nbsp;3-Metropolitan Magistrate 43 rd</strong></label></span><br style='clear:left;'/></div><div  style='width:700px;margin-top:10px;'><h2 class='h2class' style='font-weight:bold;'>Petitioner and Advocate</h2><span class='Petitioner_Advocate_table' style='float:left;border:1px solid #000; width:100%;text-align:left; margin-bottom:10px; padding-left:5px;'>1) SEEMA PRAVIN DUSANE<br />&nbsp;&nbsp;&nbsp;&nbsp;Advocate- priti khaire<br /><br /></span><br /><h2 class='h2class' style='font-weight:bold;'>Respondent and Advocate</h2><span class='Respondent_Advocate_table' style='float:left;border:1px solid #000; width:100%;text-align:left;margin-bottom:10px;padding-left:5px;'>1) RAJIV BHASKAR JAGADA<br /><br /></span><br /><h2 class='h2class' style='font-weight:bold;'>Acts</h2><table width="100%" cellspacing="0" cellpadding="1" align="center" border="1" style="border-collapse:collapse;box-sizing:border-box; -moz-box-sizing:border-box; "  id='act_table' class='Acts_table'><tr><th><b>Under Act(s)</b></th><th><b>Under Section(s)</b></th></tr><tr><td width='50%' align='left' style='padding-left:5px;'>NEGOTIABLE INSTRUMENTS ACT</td><td width='50%' align='center' style='padding-left:5px;'>138r/w142</td></tr></table></div><table id='historyheading'><tr><td><h2 class='h2class' style='clear:both;font-weight:bold;text-align:center;margin-top:10px;'>Case History</h2></td></tr></table><table width="700px" cellspacing="0" cellpadding="1" align="center" border="1" style="border-collapse:collapse;box-sizing:border-box; -moz-box-sizing:border-box; " class="history_table"><tr><th scope="col" align='left' style=''>Registration Number</th><th scope="col" style=''>Judge</th><th scope="col" style=''>Business on Date</th><th scope="col" style=''>Hearing Date</th><th scope="col" style=''>Purpose of Hearing</th></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20211118','MHMM170047912021','1','Pending','22-09-2021','3')>22-09-2021</a></td><td>18-11-2021</td><td style=''> FOR VERIFICATION</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20220503','MHMM170047912021','1','Pending','18-11-2021','3')>18-11-2021</a></td><td>03-05-2022</td><td style=''> NOT HEARD CASES</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20220504','MHMM170047912021','1','Pending','03-05-2022','3')>03-05-2022</a></td><td>04-05-2022</td><td style=''> NOT HEARD CASES</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20220825','MHMM170047912021','1','Pending','04-05-2022','3')>04-05-2022</a></td><td>25-08-2022</td><td style=''> NOT HEARD CASES</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20221222','MHMM170047912021','1','Pending','25-08-2022','3')>25-08-2022</a></td><td>22-12-2022</td><td style=''> NOT HEARD CASES</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20230623','MHMM170047912021','1','Pending','22-12-2022','3')>22-12-2022</a></td><td>23-06-2023</td><td style=''> NOT HEARD CASES</td></tr><tr><td align='left' style=''>4301388/2021</td><td align='left' style=''>Metropolitan Magistrate 43 rd</td><td align='left' style=''><a href='#' onclick=viewBusiness('5','23','20240122','MHMM170047912021','1','Pending','23-06-2023','3')>23-06-2023</a></td><td>22-01-2024</td><td style=''> NOT HEARD CASES</td></tr>
<br />

</table></table></tbody></table></table><br />
</div>
</body>
</form>
</html>

  `;
const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
        <View style={{height:Utils.ScreenHeight(100), marginHorizontal:Utils.ScreenWidth(4), backgroundColor:colors.white}}>

        <View style={{ flexDirection: "row", marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Case Details</Text>
                </View>
                <View style={{marginTop:Utils.ScreenHeight(4), marginHorizontal:Utils.ScreenWidth(4)}}>
                    <View style={{flexDirection:"row", alignItems:'center', justifyContent:"flex-start"}}>
                    <View>
                        <Text style={{fontSize:Utils.ScreenHeight(2.5), fontWeight:500}}>Case Number</Text>
                        <Text style={{color:colors.grey, fontSize:Utils.ScreenHeight(1.9), marginTop:Utils.ScreenHeight(1)}}>{casedata.data.case_no}</Text>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(15)}}>
                        <Text style={{fontSize:Utils.ScreenHeight(2.5), fontWeight:500, }}>Case Year</Text>
                        <Text style={{color:colors.grey, fontSize:Utils.ScreenHeight(1.9), marginTop:Utils.ScreenHeight(1)}}>{casedata.data.year}</Text>
                    </View>

                    </View>
                    <View style={{marginTop:Utils.ScreenHeight(5)}}>
                        <Text style={{fontSize:Utils.ScreenHeight(2.5), fontWeight:500}}>Case Type</Text>
                        <Text style={{color:colors.grey, fontSize:Utils.ScreenHeight(1.9), marginTop:Utils.ScreenHeight(1)}}>{casedata.data.json_data.con[0].type_name}</Text>
                    </View>
                    <View style={{marginTop:Utils.ScreenHeight(5)}}>
                        <Text style={{fontSize:Utils.ScreenHeight(2.5), fontWeight:500}}>Petitioner & Respondent</Text>
                        <Text style={{color:colors.grey, fontSize:Utils.ScreenHeight(1.8), marginTop:Utils.ScreenHeight(1)}}>{casedata.data.json_data.con[0].pet_name}{'\n'+"VS"+'\n'}
                        {casedata.data.json_data.con[0].res_name}</Text>
                    </View>


                </View>

                <TouchableOpacity
                onPress={openLinkInWebView}
                style={{borderWidth:1,
                    justifyContent:"center",
                    height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(40), marginTop:Utils.ScreenHeight(10), alignSelf:"center", borderRadius:12, backgroundColor:colors.primary}}>
                        <Text style={{color:colors.white, textAlign:"center",fontWeight:600,fontSize:Utils.ScreenHeight(2) }}>View Details</Text>
                </TouchableOpacity>

        </View>
        <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(!visible)}>
        <WebView 
        source={{ html:yourHtmlContent  }} 
        />
    </Modal>
    </SafeAreaView>
  )
}

export default caseresults