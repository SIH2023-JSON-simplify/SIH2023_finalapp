import AgoraUIKit from 'agora-rn-uikit';

const VideoCall = () => {
    const connectionData = {
        appId: 'b907762bc06a4b5695a7e12f1e6f6cbd',
        channel: 'test',
        token: '007eJxTYBD988VoZbCC+Qqn3D0fjuZbi+Yq/+Hl3t8YdeLJvClbpGQVGJIsDczNzYySkg3MEk2STM0sTRPNUw2N0gxTzdLMkpNSrqb/TmkIZGQw/iDHxMgAgSA+C0NJanEJAwMANUMflg==', // enter your channel token as a string 
       };
  return(
    <AgoraUIKit connectionData={connectionData} />
   )
}

export default VideoCall;