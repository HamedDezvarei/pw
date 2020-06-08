var push = require('web-push'); 

let vapiKeys= {
    publicKey: 'BG-tD5VnHd2rJ_nVFN2dCmLvSVojFizFpFObLEHfeFfOXEYmrwKpr6CRncY_R_AxfJLWOCgt3qJ0tkbvQrrSE-o',
    privateKey: 'uOPD9DRVe6vISuQKTTYWqTq3uvqcSsTFwIztIgmHf_M'
  }

push.setVapidDetails('mailto:test@site.com', vapiKeys.publicKey, vapiKeys.privateKey); 

let sub= {}; 