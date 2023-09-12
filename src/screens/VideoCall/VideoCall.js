import AgoraUIKit from 'agora-rn-uikit';

const VideoCall = () => {
    const connectionData = {
        appId: 'b907762bc06a4b5695a7e12f1e6f6cbd',
        channel: 'test',
        token: '007eJxTYFj55rDBCZdar49XrhRfPKi7TcH8aTZH3ZqdV0VZlC/If6pVYEiyNDA3NzNKSjYwSzRJMjWzNE00TzU0SjNMNUszS05KsfjIkNoQyMjwwNqegREKQXwWhpLU4hIGBgC7DiBl', // enter your channel token as a string 
       };
  return(
    <AgoraUIKit connectionData={connectionData} />
   )
}

export default VideoCall;