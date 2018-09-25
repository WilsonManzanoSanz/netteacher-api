const http = require('http');
const app = require('./server/');
const serverConfig = require('./server/config/');
const {port, hostname} = serverConfig.server;
const server = http.createServer(app);
//Firebase initialization
const admin = require('firebase-admin');
const serviceAccount = require('./react-dev-ead30-firebase-adminsdk-c10ik-a545c8df6a.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-dev-ead30.firebaseio.com/'
});
server.listen(port, ()=>{
  console.log('Running on codeanywhere: ', `${hostname}+${port}`);
});