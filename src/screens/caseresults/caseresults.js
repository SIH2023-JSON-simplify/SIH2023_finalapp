import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../contants'

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
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
        <View>
            
        </View>
      <Text>caseresults</Text>
    </SafeAreaView>
  )
}

export default caseresults