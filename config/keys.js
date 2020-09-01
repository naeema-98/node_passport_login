
/*dbPassword = 'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
*/
module.exports = {
    //'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : 'mongodb://localhost:27017/dbusers'
}