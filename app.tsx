import { ZoomMtg } from '@zoomus/websdk'

const {log} = console;

(() => {
  ZoomMtg.setZoomJSLib('https://source.zoom.us/2.6.0/lib', '/av');

  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();

  ZoomMtg.init({
    leaveUrl: document.location.href,
    success() {
      ZoomMtg.join({
        meetingNumber: '',
        userName: '',
        signature: '',
        apiKey: '',
        userEmail: '',
        passWord: '',
        success() {
          log('Joined!');
        },
        error(res) {
          log('Failed to join!', res);
        }
      });
    },
    error(res) {
      log('Init failed', res);
    }
  });

  window.addEventListener('unload', () => {
    ZoomMtg.leaveMeeting({});
  });
})();
