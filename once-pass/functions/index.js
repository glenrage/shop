const functions = require('firebase-functions');
const createUser = require('./create_user')
const admin = require('firebase-admin')
const serviceAccount = require('./service_account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://once-pass.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser)
