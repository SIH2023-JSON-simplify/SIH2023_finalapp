import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // For selecting documents (PDFs, images, etc.)
import axios from "axios"
import { colors } from '../../contants';

// import IPFS from 'ipfs-http-client';

// const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const Uploadtoipfs = () => {
  const [uploadedCID, setUploadedCID] = useState(null);

  

  const pinFileToIPFS = async () => {
    const formData = new FormData();
    const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("file hai " ,result[0].uri)
    //   const file = {
    //     uri: result.uri,
    //     name: result.name,
    //     type: result.type,
    //   };

    // const src = "path/to/file.png";
    
    // const file = fs.createReadStream(src)
    // formData.append('file', result)
    
    formData.append('file', {
        'uri': result[0].uri,
        'type': result[0].type,
        'name': Date.now() + result[0].name,
    });

    



    try{
        console.log(formData," lkhfs")
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MjRhN2M0Zi1iMmY3LTRmZDgtYTM5My0yM2M5MzA3ZjQ1MDQiLCJlbWFpbCI6Im1vaGVldHNoZW5kYXJrYXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZjY2QxOTNkZWU5M2NmMTIyNmQ4Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjAwYjliZTdhNWUxNjU2YWIyMjJmYzMyMWU1YjEwZmVmYWI5NThiMGZjYTkxM2I5YmQ1M2ZiMWEwODllMmY5YiIsImlhdCI6MTY5NDQyNTgxNX0.avTCrsqQLcpLCELt8EsB_yvt76MlqowtjXW8SIhnnYs"}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.uploadButton} onPress={pinFileToIPFS}>
        <Text style={styles.buttonText}>Upload File</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  uploadedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  uploadedText: {
    fontSize: 18,
  },
  uploadedCID: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Uploadtoipfs;