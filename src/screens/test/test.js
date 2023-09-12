import { View, Text } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const test = () => {
  const [data, setData] = useState([]);
  const apikey ='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'
  const apiUrl= 'https://api.openai.com/v1/completions'
  const [textInput, setTextInput] = useState('');
  
  
  const client = axios.create({
      headers:{
          Authorization: "Bearer "+apikey,
      }
  })

  const params = {
      prompt: "hello",
      model: "text-davinci-002",
      max_tokens:100,
      temperature:0.5,
  }

  const handleSend = async () =>{
    console.log("pressed")
  client.post("https://api.openai.com/v1/completions",params)
  .then((result)=>{
      console.log(result.data.choices[0].text);
      const temp = result.data.choices[0].text.trim();
      const temp2 = temp.replace('?'," ").trim();
      console.log(temp);
      // setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': temp2}])
      console.log(data);
      // setTextInput("");
  })
  .catch((err)=>{
      console.log(err)
  })
  }
  return (
    <View style={{marginTop:80}}>
      <Text
      onPress={()=>{handleSend()}}
      >test</Text>
    </View>
  )
}

export default test