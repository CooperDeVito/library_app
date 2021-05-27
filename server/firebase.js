//the actual firebase database side.
const admin = require('firebase-admin');
const serviceAccount = require('./firebase_key.json');

//activate credentials 
admin.initializeApp({ 
    credential:admin.credential.cert(serviceAccount);
});

const database = admin.firestore(); 

module.exports = database; 
