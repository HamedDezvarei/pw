var push = require('web-push'); 

let vapiKeys= {
    publicKey: 'BG-tD5VnHd2rJ_nVFN2dCmLvSVojFizFpFObLEHfeFfOXEYmrwKpr6CRncY_R_AxfJLWOCgt3qJ0tkbvQrrSE-o',
    privateKey: 'uOPD9DRVe6vISuQKTTYWqTq3uvqcSsTFwIztIgmHf_M'
  }

push.setVapidDetails('mailto:test@site.com', vapiKeys.publicKey, vapiKeys.privateKey); 

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/fMFY_HFD0U8:APA91bEwaWQIsBMTk4jK6V7AmwBmKMz5sVpWoZ-dvnEhfeRzE08E7xVDfyQu_mAILU_ITpqZ1z4liMzpLmXIaY1pHwBoX9YdIPx34I-awi27-sYV1hGpr18cbEIq5oxeQxnn0RswRunJ",
"expirationTime":null,
"keys":{
  "p256dh":"BC83R7DjKvGp1_QNQvXIFZrtFeQuCLNEJDfbLWHsGiqUsHTsfRmZ_2pzZ1Zz36HXDv7-I3_4Jmya-u6V0ILGjhQ",
"auth":"2f5xYuHrPoHYqPDhIzQSxQ"
}
}; 

push.sendNotification(sub, 'test message');